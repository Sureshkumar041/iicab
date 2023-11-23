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
import {height} from '../../common/constant';
import {useNavigation} from '@react-navigation/native';
import {DARKBLUE, IIC_ASH, IIC_BLUE} from '../../common/colors';
import CustomHeader from '../../components/atoms/CustomHeader';
import {Formik} from 'formik';
import {forgotPassword} from '../../common/formValidation';

const ForgetPasswordScreen = () => {
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
      <StatusBar barStyle={'light-content'} backgroundColor={DARKBLUE} />

      <Formik
        initialValues={{loginName: ''}}
        validationSchema={forgotPassword}
        onSubmit={values => {
          // Handle form submission here
          console.log(values);
          navigation.navigate('ResetPasswordScreen');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/iDepoLogoPNG.png')}
              style={styles.image}
            />
            <IText textType="bold" textStyle={styles.forgotTitle}>
              Forgot Password
            </IText>
            <IText textType="regular" textStyle={styles.instruction}>
              Enter your login name and we'll send you a link for reset password
              to your registered email
            </IText>
            <ITextInput
              containerStyle={styles.input}
              label={'Login Name'}
              placeholder="Please enter username"
              onChangeText={handleChange('loginName')}
              onBlur={handleBlur('loginName')}
              value={values.loginName}
              errorMsg={touched.loginName &&errors.loginName && (
                  <IText textStyle={styles.errorText}>{errors.loginName}</IText>
                  )}
            />
            <IButton
              title="Reset Password"
              style={[styles.sendButton]}
              onPress={handleSubmit}
            />
            <TouchableOpacity onPress={handleBackPress}>
              <IText textType="regular" textStyle={styles.goBack}>
                Back to Login
              </IText>
            </TouchableOpacity>
            
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    // height: height,
  },
  goBack: {
    color: IIC_BLUE,
    alignSelf: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },

  image: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  forgotTitle: {
    fontSize: 18,
    paddingVertical: 20,
    // paddingBottom: 30,
    alignSelf: 'center',
    color: IIC_BLUE,
  },
  input: {
    marginVertical: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
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

// Export the component
export default ForgetPasswordScreen;
