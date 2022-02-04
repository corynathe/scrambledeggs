import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';

import { DIFFICULTY_LEVEL, ICON_GROUP, COLORS, TIMEOUT } from './constants';
import { STYLES } from './styles';
import { GameSettings, GameColors } from "./models";
import { ClickIcon, LevelIcons, NonClickIcon } from "./Icons";
import { OptionsModal } from "./OptionsModal";
import { InfoModal } from "./InfoModal";
import { GameOverModal } from "./GameOverModal";

export default function App() {
  const [settings, setSettings] = useState<GameSettings>({
    game: 'egg',
    level: 1,
    colors: getRandomColors(COLORS, 12),
    totalCount: 12,
  });
  const diffLevel = useMemo(() => DIFFICULTY_LEVEL[settings.level], [settings]);
  const gameInfo = useMemo(() => ICON_GROUP[settings.game], [settings]);
  const rows = useMemo(() => [...Array(diffLevel.rowCount).keys()], [diffLevel]);
  const cols = useMemo(() => [...Array(diffLevel.colCount).keys()], [diffLevel]);
  const [show, setShow] = useState<boolean[]>(Array(settings.totalCount).fill(false));
  const [hasShow, setHasShow] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [guessCounter, setGuessCounter] = useState<number>(0);
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showGameOverModal, setShowGameOverModal] = useState<boolean>(false);

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

  const resetGame = useCallback((newSettings: Partial<GameSettings>) => {
    const newLevel = newSettings.level ?? settings.level;
    const newTotalCount = DIFFICULTY_LEVEL[newLevel].rowCount * DIFFICULTY_LEVEL[newLevel].colCount;
    const _newSettings = {
      ...settings,
      ...newSettings,
      colors: getRandomColors(COLORS, newTotalCount),
    };
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

  return (
      <View style={STYLES.container}>
        <View style={STYLES.north}>
          <Text style={STYLES.title}>{gameInfo.title}</Text>
          <View style={STYLES.row}>
            <Text style={STYLES.optionsDisplay}>
              <TouchableOpacity style={STYLES.infoIcon} onPress={toggleInfoModal}>
                <NonClickIcon type="MaterialCommunityIcons" name="information-outline" color={'#fff'} size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleOptionsModal}>
                <View style={STYLES.row}>
                  <NonClickIcon style={STYLES.gameIcon} type={gameInfo.icon.type} name={gameInfo.icon.name} color={'#fff'} size={30} />
                  <LevelIcons icons={DIFFICULTY_LEVEL[settings.level].icons} color={'#fff'} size={30} />
                </View>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        <View style={STYLES.south}>
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
                guessCounter={guessCounter}
                toggleGameOverModal={toggleGameOverModal}
            />
        )}
      </View>
  );
}

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
