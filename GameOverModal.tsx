import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';

import { STYLES } from './styles';

interface Props {
    guessCounter: number;
    toggleGameOverModal: () => void;
}

export const GameOverModal: FC<Props> = (props) => {
    const { guessCounter, toggleGameOverModal } = props;

    return (
        <Modal
            animationType="slide"
            transparent
            visible={true}
            onRequestClose={toggleGameOverModal}
        >
            <View style={STYLES.centeredView}>
                <View style={STYLES.modalView}>
                    <Text style={STYLES.optionsTitle}>Great Work!</Text>
                    <View style={STYLES.spaced}>
                        <Text style={STYLES.infoLine}>You guessed it in <Text style={STYLES.infoGuess}>{guessCounter}</Text> {guessCounter == 1 ? 'try' : 'tries'}.</Text>
                    </View>
                    <TouchableOpacity style={STYLES.button} onPress={toggleGameOverModal}>
                        <Text style={STYLES.buttonText}>Play Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
