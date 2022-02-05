import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DIFFICULTY_LEVEL, ICON_GROUP, COLORS, TIMEOUT, GAME_KEY, DIFFICULTY_KEY } from './constants';
import { STYLES } from './styles';
import { GameSettings, GameColors } from "./models";
import { ClickIcon, LevelIcons, NonClickIcon } from "./Icons";
import { OptionsModal } from "./OptionsModal";
import { InfoModal } from "./InfoModal";
import { GameOverModal } from "./GameOverModal";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}

const getRandomColors = (colors: string[], n: number): GameColors => {
  const icons = [...colors].sort(() => 0.5 - Math.random()).slice(0, n);
  let containers = [...icons].sort(() => 0.5 - Math.random());
  let matches = colorMatches(icons, containers);
  while (matches !== 1) {
    containers = [...icons].sort(() => 0.5 - Math.random());
    matches = colorMatches(icons, containers);
  }
  return { icons, containers };
}

const colorMatches = (first: string[], second: string[]): number => {
  return first.filter((x, i) => x === second[i]).length;
}

const DEFAULT_SETTINGS = {
  game: 'egg',
  level: 1,
  colors: getRandomColors(COLORS, 12),
  totalCount: 12,
};

export default function App() {
  const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS);
  const [hasShow, setHasShow] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [guessCounter, setGuessCounter] = useState<number>(0);
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);
  const [show, setShow] = useState<boolean[]>(Array(DEFAULT_SETTINGS.totalCount).fill(false));
  const [loading, setLoading] = useState<boolean>(true);

  const diffLevel = useMemo(() => DIFFICULTY_LEVEL[settings.level], [settings]);
  const gameInfo = useMemo(() => ICON_GROUP[settings.game], [settings]);
  const rows = useMemo(() => [...Array(diffLevel.rowCount).keys()], [diffLevel]);
  const cols = useMemo(() => [...Array(diffLevel.colCount).keys()], [diffLevel]);
  const showingModal = useMemo(() => showOptionsModal || showInfoModal || showGameOverModal, [showOptionsModal, showInfoModal, showGameOverModal]);

  useEffect(() => {
    (async () => {
      try {
        const newSettings = {};
        const initGame = await AsyncStorage.getItem(GAME_KEY);
        if (initGame) {
          newSettings.game = initGame;
        }
        const initLevel = await AsyncStorage.getItem(DIFFICULTY_KEY);
        if (initLevel) {
          newSettings.level = parseInt(initLevel);
        }

        if (Object.keys(newSettings).length) {
          resetGame(newSettings);
        }
        setLoading(false);
      } catch(e) {
        setLoading(false);
      }
    })();
  }, []);

  const showNone = useCallback((force?: boolean) => {
    if (!correct || force) {
      setHasShow(false);
      setShow(Array(settings.totalCount).fill(false));
    }
  }, [correct, settings]);

  const showAll = useCallback(() => {
    setHasShow(false);
    setShow(Array(settings.totalCount).fill(true));
  }, [settings]);

  useEffect(() => {
    if (hasShow) {
      setTimeout(() => showNone(), TIMEOUT);
    }
  }, [hasShow]);

  const clickContainer = useCallback((index: number) => {
    if (hasShow || typeof index !== 'number') return;

    const newShow = [...show];
    newShow[index] = true;
    setShow(newShow);
    setHasShow(true);
    setGuessCounter(guessCounter + 1);

    const isCorrect = settings.colors.icons[index] === settings.colors.containers[index];
    if (isCorrect) {
      setCorrect(true);
      setTimeout(() => {
        setShowGameOverModal(true);
      }, 500);
    }
  }, [show, hasShow, settings, guessCounter]);

  const newGame = useCallback(() => {
    resetGame(settings);
  }, [settings]);

  const resetGame = useCallback(async (newSettings: Partial<GameSettings>) => {
    const newLevel = newSettings.level ?? settings.level;
    const newTotalCount = DIFFICULTY_LEVEL[newLevel].rowCount * DIFFICULTY_LEVEL[newLevel].colCount;
    const _newSettings = {
      ...settings,
      ...newSettings,
      colors: getRandomColors(COLORS, newTotalCount),
    };

    if (_newSettings.game !== settings.game) {
      try {
        await AsyncStorage.setItem(GAME_KEY, _newSettings.game);
      } catch (e) {
        // saving error
      }
    }
    if (_newSettings.level !== settings.level) {
      try {
        await AsyncStorage.setItem(DIFFICULTY_KEY, _newSettings.level+'');
      } catch (e) {
        // saving error
      }
    }

    setSettings(_newSettings);
    setCorrect(false);
    showNone(true);
    setGuessCounter(0);
  }, [settings]);

  const toggleOptionsModal = useCallback(() => {
    setShowOptionsModal(!showOptionsModal);
  }, [showOptionsModal]);

  const toggleInfoModal = useCallback(() => {
    setShowInfoModal(!showInfoModal);
  }, [showInfoModal]);

  const toggleGameOverModal = useCallback(() => {
    newGame();
    setShowGameOverModal(!showGameOverModal);
  }, [showGameOverModal, newGame]);

  if (loading) {
    return null;
  }

  return (
      <View style={STYLES.container}>
        <View style={[STYLES.north, showingModal ? STYLES.withOpacity : undefined]}>
          <Text style={STYLES.title}>{gameInfo.title}</Text>
          <View style={STYLES.row}>
            <Text style={STYLES.optionsDisplay}>
              <TouchableOpacity style={STYLES.infoIcon} onPress={toggleInfoModal}>
                <NonClickIcon type="MaterialCommunityIcons" name="information-outline" color={'#fff'} size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleOptionsModal}>
                <View style={STYLES.row}>
                  <NonClickIcon style={STYLES.gameIcon} type={gameInfo.icon.type} name={gameInfo.icon.name} color={'#fff'} size={25} />
                  <LevelIcons icons={DIFFICULTY_LEVEL[settings.level].icons} color={'#fff'} size={25} />
                </View>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        <View style={[STYLES.south, showingModal ? STYLES.withOpacity : undefined]}>
          {rows.map(r => {
            return (
                <View key={r} style={STYLES.row}>
                  {cols.map(c => {
                    const index = (r * cols.length) + c;
                    const iconColor = show[index] ? settings.colors.icons[index] : 'white';
                    return (
                        <View key={r+''+c} style={STYLES.cell}>
                          <NonClickIcon index={index} type={gameInfo.icon.type} name={gameInfo.icon.name} color={iconColor} size={diffLevel.size} />
                          {correct && <NonClickIcon index={index} type={gameInfo.iconContainer.type} name={gameInfo.iconContainer.name} color={settings.colors.containers[index]} size={diffLevel.size * gameInfo.iconContainer.sizeFactor} />}
                          {!correct && <ClickIcon index={index} onClick={clickContainer} type={gameInfo.iconContainer.type} name={gameInfo.iconContainer.name} color={settings.colors.containers[index]} size={diffLevel.size * gameInfo.iconContainer.sizeFactor} />}
                        </View>
                    )
                  })}
                </View>
            )
          })}
        </View>
        {showOptionsModal && (
            <OptionsModal
                settings={settings}
                toggleOptionsModal={toggleOptionsModal}
                resetGame={resetGame}
            />
        )}
        {showInfoModal && (
            <InfoModal
                gameInfo={gameInfo}
                toggleInfoModal={toggleInfoModal}
            />
        )}
        {showGameOverModal && (
            <GameOverModal
                color={settings.colors.containers[show.findIndex(s => s)]}
                gameInfo={gameInfo}
                guessCounter={guessCounter}
                toggleGameOverModal={toggleGameOverModal}
            />
        )}
      </View>
  );
}
