import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';

import { STYLES } from './styles';
import { NonClickIcon } from "./Icons";
import { COLORS, DIFFICULTY_LEVEL } from "./constants";

interface Props {
    gameInfo: Record<string, any>;
    toggleInfoModal: () => void;
}

export const InfoModal: FC<Props> = (props) => {
    const { toggleInfoModal, gameInfo } = props;
    const size = DIFFICULTY_LEVEL[1].size;

    return (
        <Modal
            animationType="slide"
            transparent
            visible={true}
            onRequestClose={toggleInfoModal}
        >
            <View style={STYLES.centeredView}>
                <View style={STYLES.modalView}>
                    <Text style={STYLES.optionsTitle}>How To Play</Text>
                    <View style={STYLES.spaced}>
                        {gameInfo.info.map((line, i) => {
                            return <Text style={STYLES.infoLine} key={i}>{line}</Text>
                        })}
                    </View>
                    <View style={STYLES.spaced}>
                        <View style={STYLES.row}>
                            <View style={STYLES.cell}>
                                <View style={STYLES.cell}>
                                    <NonClickIcon type={gameInfo.icon.type} name={gameInfo.icon.name} color={'lightblue'} size={size} />
                                    <NonClickIcon index={0} type={gameInfo.iconContainer.type} name={gameInfo.iconContainer.name} color={'lightblue'} size={size * gameInfo.iconContainer.sizeFactor} />
                                </View>
                                <NonClickIcon style={STYLES.infoCorrect} index={0} type={'FontAwesome'} name={'check-circle'} color={'green'} size={30} />
                            </View>
                            <View style={STYLES.cell}>
                                <View style={STYLES.cell}>
                                    <NonClickIcon type={gameInfo.icon.type} name={gameInfo.icon.name} color={'teal'} size={size} />
                                    <NonClickIcon index={0} type={gameInfo.iconContainer.type} name={gameInfo.iconContainer.name} color={'purple'} size={size * gameInfo.iconContainer.sizeFactor} />
                                </View>
                                <NonClickIcon style={STYLES.infoCorrect} index={0} type={'FontAwesome'} name={'times-circle'} color={'red'} size={30} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={STYLES.button} onPress={toggleInfoModal}>
                        <Text style={STYLES.buttonText}>DONE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
