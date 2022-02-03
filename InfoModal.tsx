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
    const size = DIFFICULTY_LEVEL[0].size;

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
                        {gameInfo.info.map(line => {
                            return <Text style={STYLES.infoLine}>{line}</Text>
                        })}
                    </View>
                    <View style={STYLES.row}>
                        <View style={STYLES.cell}>
                            <View style={STYLES.cellBorder}>
                                <NonClickIcon type={gameInfo.icon.type} name={gameInfo.icon.name} color={COLORS[0]} size={size} />
                                <NonClickIcon index={0} type={gameInfo.iconContainer.type} name={gameInfo.iconContainer.name} color={COLORS[0]} size={size * gameInfo.iconContainer.sizeFactor} />
                            </View>
                            <NonClickIcon style={STYLES.infoCorrect} index={0} type={'FontAwesome'} name={'check-circle'} color={'green'} size={50} />
                        </View>
                        <View style={STYLES.cell}>
                            <View style={STYLES.cellBorder}>
                                <NonClickIcon type={gameInfo.icon.type} name={gameInfo.icon.name} color={COLORS[5]} size={size} />
                                <NonClickIcon index={0} type={gameInfo.iconContainer.type} name={gameInfo.iconContainer.name} color={COLORS[2]} size={size * gameInfo.iconContainer.sizeFactor} />
                            </View>
                            <NonClickIcon style={STYLES.infoCorrect} index={0} type={'FontAwesome'} name={'times-circle'} color={'red'} size={50} />
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
