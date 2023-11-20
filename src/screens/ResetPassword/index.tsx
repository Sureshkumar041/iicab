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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IText from '../../components/atoms/Text';
import IButton from '../../components/atoms/Button';
import ITextInput from '../../components/atoms/TextInput';
import {useNavigation} from '@react-navigation/native';
import {IIC_ASH, IIC_BLUE} from '../../common/colors';

const ResetPasswordScreen = () => {
  const navigation: any = useNavigation();

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
        // height: height,
      }}>
      <StatusBar />
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/iDepoLogoPNG.png')}
          style={styles.image}
        />
        <IText textType="bold" textStyle={styles.loginTitle}>
          Create New Password
        </IText>
        <IText textType="regular" textStyle={styles.instruction}>
          Your new password must be unique from those previously used.
        </IText>
        <ITextInput
          label={'New Password'}
          placeholder="Please enter new password"
          secureTextEntry
          iconName="password"
          containerStyle={styles.input}
        />
        <ITextInput
          label={'Confirm New Password'}
          placeholder="Please re-enter the new password"
          iconName="password"
          containerStyle={styles.input}
          secureTextEntry
        />

        <IButton title="Save Password" style={[styles.sendButton]} />
        {/* Back button with arrow icon */}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <IText textType="regular" textStyle={styles.goBack}>
            Back to Login
          </IText>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  goBack: {
    color: IIC_BLUE,
    alignSelf: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },

  image: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  loginTitle: {
    fontSize: 18,
    paddingVertical: 50,
    paddingBottom: 30,
    alignSelf: 'center',
    color: IIC_BLUE,
    fontWeight: '600',
  },
  input: {
    marginVertical: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: IIC_BLUE,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  instruction: {
    paddingVertical: 20,
    color: IIC_ASH,
    fontSize: 14,
  },
});

export default ResetPasswordScreen;
