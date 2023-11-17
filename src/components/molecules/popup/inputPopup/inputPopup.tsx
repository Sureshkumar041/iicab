
import React, { useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import IText from '../../../atoms/Text';
import IButton from '../../../atoms/Button';
import ITextInput from '../../../atoms/TextInput';


interface PopupComponentProps {
    isVisible: boolean;
    closePopup: () => void;
    title: string;
    description: string;
    saveButtonLabel: string;
    cancelButtonLabel: string;
}

const InputPopup: React.FC<PopupComponentProps> = ({
    isVisible,
    closePopup,
    title,
    description,
    saveButtonLabel,
    cancelButtonLabel,

}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
        console.log('Input value:', inputValue);
        closePopup();
    };
    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="fade"
            onRequestClose={() => closePopup()}
        >
            <View style={styles.container}>
                <View style={styles.popup}>
                    <TouchableOpacity onPress={() => closePopup()} style={styles.closeButton}>
                        <Image source={require('../../../../assets/icons/close.png')} style={styles.closeIcon} />
                    </TouchableOpacity>
                    <IText textStyle={styles.title} >{title}</IText>
                    <IText textStyle={styles.description}>{description}</IText>
                    <View>
                        <ITextInput
                            placeholder="Enter text"
                            value={inputValue}
                            onChangeText={(text: any) => setInputValue(text)}
                        />
                        <ITextInput
                            placeholder="Enter text"
                            value={inputValue}
                            onChangeText={(text: any) => setInputValue(text)}
                        />
                        <ITextInput
                            placeholder="Enter text"
                            value={inputValue}
                            onChangeText={(text: any) => setInputValue(text)}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <IButton onPress={handleSave} title={saveButtonLabel} />
                        <IButton onPress={closePopup} title={cancelButtonLabel} />

                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        width: 300,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    closeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    iconImage: {
        width: 60,
        height: 50,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        columnGap:2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginRight: 8,
    },
   
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});


export default InputPopup;
