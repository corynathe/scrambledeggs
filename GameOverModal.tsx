import React, { FC } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';

import { STYLES } from './styles';
import { NonClickIcon } from "./Icons";
import { DIFFICULTY_LEVEL } from "./constants";

interface Props {
    color: string;
    gameInfo: Record<string, any>;
    guessCounter: number;
    toggleGameOverModal: () => void;
}

export const GameOverModal: FC<Props> = (props) => {
    const { color, gameInfo, guessCounter, toggleGameOverModal } = props;

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
                        <View style={STYLES.cell}>
                            <NonClickIcon index={0} type={gameInfo.icon.type} name={gameInfo.icon.name} color={color} size={DIFFICULTY_LEVEL[1].size * gameInfo.iconContainer.sizeFactor} />
                        </View>
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
