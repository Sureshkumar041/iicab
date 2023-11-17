import React from 'react';

import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IText from '../../components/atoms/Text';
import IButton from '../../components/atoms/Button';
import ITextInput from '../../components/atoms/TextInput';
import { height } from '../../common/constant';
import { useNavigation } from '@react-navigation/native';

const forgetPasswordScreen = () => {

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };


    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            style={{
                padding: 12,
                flex: 1,
                backgroundColor: '#fff',
                height: height
            }}>
            <StatusBar />
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/forgotPassword.png')}
                    style={styles.image}
                />
                <IText textType='bold' textStyle={styles.loginTitle}>FORGOT PASSWORD</IText>
                <IText textType='regular' textStyle={styles.instruction}> Don't Worry. Enter your email and we'll send you a verification code to reset your password </IText>


                <ITextInput
                    label={'Registered Email'}
                    placeholder="Please enter email"

                />


                <IButton title="Send" style={[styles.sendButton]} />
                {/* Back button with arrow icon */}
                <TouchableOpacity onPress={handleBackPress}>
                    <IText textType='regular' textStyle={styles.goBack}>Back to Login</IText>
                </TouchableOpacity>

            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: height
    },
    goBack: {
        color: 'blue',
        alignSelf: 'flex-end',
        marginBottom: 10,
        paddingTop:10
    },

    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    loginTitle: {
        fontSize: 28,
        paddingVertical: 20,
        alignSelf: 'center',
        color: 'navy',
        fontWeight: '600'
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    sendButton: {
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "#0C4DA2"
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    instruction: {
        paddingVertical: 20,
        alignSelf: 'center',
        color: 'navy',
    }
});

// Export the component
export default forgetPasswordScreen;
