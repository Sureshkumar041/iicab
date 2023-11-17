// Import necessary modules from React Native
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

const LoginScreen = () => {

    const navigation = useNavigation();

    const ForgetPasswordScreenNavigation = () =>{
        navigation.navigate('ForgetPasswordScreen')
    }
   

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            style={{
                padding: 12,
                flex: 1,
                backgroundColor: '#fff',
            }}>
            <StatusBar />
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/iDepoLogo.jpg')}
                    style={styles.image}
                />
                    <IText textType='bold' textStyle={styles.loginTitle}>LOGIN</IText>


                    <ITextInput
                        label={'Login Name'}
                        placeholder="Please enter email"

                    />
                    <ITextInput
                        label={'Password'}
                        placeholder="Please enter password"
                        secureTextEntry
                    />
                <TouchableOpacity onPress={ForgetPasswordScreenNavigation}>
                    <IText textType='regular' textStyle={styles.forgetPassword}>Forgot Password?</IText>
                </TouchableOpacity>
                <TouchableOpacity >
                    <IText textType='bold' textStyle={styles.createNewAccount} >Create New Account</IText>
                </TouchableOpacity>
                <IButton title="Login" style={[styles.loginButton]} />
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        minHeight: height
    },

    image: {
        width: 200,
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
    forgetPassword: {
        color: 'blue',
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    createNewAccount: {
        color: '#7c0d82',
        alignSelf: 'center',
        marginVertical: 10,
    },
    loginButton: {
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
});

// Export the component
export default LoginScreen;
