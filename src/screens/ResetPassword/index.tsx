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
import {DANGER, DARKBLUE, IIC_ASH, IIC_BLUE} from '../../common/colors';
import CustomHeader from '../../components/atoms/CustomHeader';
import {Formik} from 'formik';
import {resetPassword} from '../../common/formValidation';

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
      <StatusBar barStyle={'light-content'} backgroundColor={DARKBLUE} />

      <Formik
        initialValues={{newPassword: '', confirmNewPassword: ''}}
        validationSchema={resetPassword}
        onSubmit={values => {
          // Handle form submission here
          console.log(values);
          navigation.navigate('PasswordVerifiedScreen');
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
              onChangeText={handleChange('newPassword')}
              onBlur={handleBlur('newPassword')}
              value={values.newPassword}
              errorMsg={
                touched.newPassword &&
                errors.newPassword && (
                  <IText textStyle={styles.errorText}>
                    {errors.newPassword}
                  </IText>
                )
              }
            />
            <ITextInput
              label={'Confirm New Password'}
              placeholder="Please re-enter the new password"
              iconName="password"
              containerStyle={styles.input}
              onChangeText={handleChange('confirmNewPassword')}
              onBlur={handleBlur('confirmNewPassword')}
              value={values.confirmNewPassword}
              errorMsg={
                touched.confirmNewPassword &&
                errors.confirmNewPassword && (
                  <IText textStyle={styles.errorText}>
                    {errors.confirmNewPassword}
                  </IText>
                )
              }
              secureTextEntry
            />

            <IButton
              title="Save Password"
              style={[styles.sendButton]}
              onPress={handleSubmit}
            />
            {/* Back button with arrow icon */}
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <IText textType="regular" textStyle={styles.goBack}>
                Back to Login
              </IText>
              {/* <IButton title="Verified" style={[styles.sendButton]}  onPress={()=> navigation.navigate('PasswordVerifiedScreen')} /> */}
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
  },
  goBack: {
    color: IIC_BLUE,
    alignSelf: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  errorText: {
    color: DANGER,
    fontSize: 12,
  },

  image: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  loginTitle: {
    fontSize: 18,
    paddingVertical: 20,
    // paddingBottom: 30,
    alignSelf: 'center',
    color: IIC_BLUE,
    fontWeight: '600',
  },
  input: {
    marginVertical: 2,
  },
  sendButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 30,
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
