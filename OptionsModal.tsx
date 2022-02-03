import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';

import { DIFFICULTY_LEVEL, ICON_GROUP } from './constants';
import { STYLES } from './styles';
import { GameSettings } from "./models";
import { LevelIcons, NonClickIcon } from "./Icons";

interface Props {
    settings: GameSettings;
    toggleOptionsModal: () => void;
    resetGame: (settings: Partial<GameSettings>) => void;
}

export const OptionsModal: FC<Props> = (props) => {
    const { settings, toggleOptionsModal, resetGame } = props;

    return (
        <Modal
            animationType="slide"
            transparent
            visible={true}
            onRequestClose={toggleOptionsModal}
        >
            <View style={STYLES.centeredView}>
                <View style={STYLES.modalView}>
                    <Text style={STYLES.optionsTitle}>Game Settings</Text>
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
    );
}
