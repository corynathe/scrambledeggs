import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';

import { STYLES } from './styles';

interface Props {
    gameInfo: Record<string, any>;
    toggleInfoModal: () => void;
}

export const InfoModal: FC<Props> = (props) => {
    const { toggleInfoModal, gameInfo } = props;

    return (
        <Modal
            animationType="slide"
            transparent
            visible={true}
            onRequestClose={toggleInfoModal}
        >
            <View style={STYLES.centeredView}>
                <View style={STYLES.modalView}>
                    <Text style={STYLES.optionsTitle}>How To Play:</Text>
                    <View style={STYLES.spaced}>
                        <Text>
                            {gameInfo.info}
                        </Text>
                    </View>
                    <TouchableOpacity style={STYLES.button} onPress={toggleInfoModal}>
                        <Text style={STYLES.buttonText}>DONE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
