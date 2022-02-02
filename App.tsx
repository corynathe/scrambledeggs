import React, { FC, useCallback, useState, useMemo, useEffect, memo } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { DIFFICULTY_LEVEL, ICON_GROUP, COLORS, TIMEOUT } from './constants';
import { STYLES } from './styles';

interface GameColors {
  icons: string[];
  containers: string[];
}

interface GameSettings {
  level: number;
  game: string;
  colors: GameColors;
  totalCount: number;
}

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
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>(false);

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

    setCorrect(settings.colors.icons[index] === settings.colors.containers[index]);
  }, [show, hasShow, settings]);

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
  }, [settings]);

  const toggleOptionsModal = useCallback(() => {
    setShowOptionsModal(!showOptionsModal);
  }, [showOptionsModal]);

  return (
      <View style={STYLES.container}>
        <View style={STYLES.north}>
          <Text style={STYLES.title}>{gameInfo.title}</Text>
          <TouchableOpacity onPress={toggleOptionsModal}>
            <View style={STYLES.row}>
              <Text style={STYLES.optioonsDisplay}>
                Type:&nbsp;&nbsp;<NonClickIcon type={gameInfo.icon.type} name={gameInfo.icon.name} color={'#000'} size={20} />
                &nbsp;&nbsp;
                Level:&nbsp;&nbsp;<LevelIcons icons={DIFFICULTY_LEVEL[settings.level].icons} color={'#000'} size={20} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={STYLES.center}>
          {correct && (
              <TouchableOpacity style={STYLES.button} onPress={newGame}>
                <Text style={STYLES.buttonText}>{gameInfo.playAgain}</Text>
              </TouchableOpacity>
          )}
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
        <Modal
            animationType="slide"
            transparent={false}
            visible={showOptionsModal}
            onRequestClose={toggleOptionsModal}>
          <View style={STYLES.centeredView}>
            <View style={STYLES.modalView}>
              <Text style={STYLES.optionsTitle}>Game Settings:</Text>
              <View style={STYLES.spaced}>
                {Object.keys(ICON_GROUP).map(gameName => {
                  const gameInfo = ICON_GROUP[gameName];
                  const style = gameName === settings.game ? STYLES.levelSelected : STYLES.levelUnselected;
                  const iconColor = gameName === settings.game ? '#000' : '#aaa';
                  return (
                      <TouchableOpacity key={gameName} onPress={() => {resetGame({game: gameName})}}>
                        <View style={STYLES.row}>
                          <NonClickIcon type={gameInfo.icon.type} name={gameInfo.icon.name} color={iconColor} size={30} />
                          <Text style={style}>&nbsp;&nbsp;{gameInfo.title}</Text>
                        </View>
                      </TouchableOpacity>
                  )
                })}
              </View>
              <View style={STYLES.spaced}>
                {DIFFICULTY_LEVEL.map((df, i) => {
                  const selected = settings.level === i;
                  const style = selected ? STYLES.levelSelected : STYLES.levelUnselected;
                  return(
                      <TouchableOpacity key={df.name} onPress={() => {resetGame({level: i})}}>
                        <View style={STYLES.row}>
                          <Text style={style}>{df.name}&nbsp;&nbsp;</Text>
                          <LevelIcons icons={df.icons} color={selected ? '#000' : '#aaa'} size={30} />
                        </View>
                      </TouchableOpacity>
                  );
                })}
              </View>
              <TouchableOpacity style={STYLES.button} onPress={toggleOptionsModal}>
                <Text style={STYLES.buttonText}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
  );
}

interface IconProps {
  index?: number;
  name: string;
  color: string;
  size: number;
  style?: any;
  type?: string;
  onClick?: (index: number) => void;
}

const ClickIcon: FC<IconProps> = (props) => {
  const { onClick } = props;

  const _onClick = useCallback(() => {
    onClick?.(props.index);
  }, [props]);

  return (
      <TouchableOpacity onPress={_onClick}>
        {props.type === 'FontAwesome' && <FAIcon {...props} />}
        {props.type === 'FontAwesome5' && <FA5Icon {...props} />}
        {props.type === 'MaterialCommunityIcons' && <MCIcon {...props} />}
      </TouchableOpacity>
  )
}

const NonClickIcon: FC<IconProps> = (props) => {
  return (
      <>
        {props.type === 'FontAwesome' && <FAIcon {...props} />}
        {props.type === 'FontAwesome5' && <FA5Icon {...props} />}
        {props.type === 'MaterialCommunityIcons' && <MCIcon {...props} />}
      </>
  )
}

const FAIcon: FC<IconProps> = (props) => {
  return (
      <FontAwesome {...props}  />
  )
}

const FA5Icon: FC<IconProps> = (props) => {
  return (
      <FontAwesome5 {...props}  />
  )
}

const MCIcon: FC<IconProps> = (props) => {
  return (
      <MaterialCommunityIcons {...props} />
  )
}

interface LevelIconsProps {
  icons: string[];
  size: number;
  color: string;
}

const LevelIcons: FC<LevelIconsProps> = memo(props => {
  const { icons, size, color } = props;
  return (
      <>
        {icons.map((icon, i) => {
          return <FAIcon key={i} name={icon} color={color} size={size} />;
        })}
      </>
  )
});

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
