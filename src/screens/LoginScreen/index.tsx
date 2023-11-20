import React, {useState} from 'react';
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
import {DARKBLUE, IIC_BLUE} from '../../common/colors';
import CheckBox from '../../components/atoms/CheckBox';
import {loginValidation} from '../../common/formValidation';
import {Formik} from 'formik';

const LoginScreen = () => {
  const [fieldValues, setFieldValues] = useState<any>({
    loginName: null,
    password: null,
  });
  const navigation: any = useNavigation();

  const ForgetPasswordScreenNavigation = () => {
    navigation.push('ForgetPasswordScreen');
  };
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={{
        padding: 12,
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={DARKBLUE} />

      <Formik
        initialValues={{loginName: '', password: ''}}
        validationSchema={loginValidation}
        onSubmit={values => {
          // Handle form submission here
          console.log(values);
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
              source={require('../../assets/images/iDepoLogo.jpg')}
              style={styles.image}
            />
            <IText textType="bold" textStyle={styles.loginTitle}>
              Sign In
            </IText>

            <ITextInput
              iconName="email"
              label={'Login Name'}
              placeholder="Please enter login name"
              onChangeText={handleChange('loginName')}
              onBlur={handleBlur('loginName')}
              value={values.loginName}
            />
            {touched.loginName && errors.loginName && (
              <Text style={styles.errorText}>{errors.loginName}</Text>
            )}
            <ITextInput
              iconName="password"
              label={'Password'}
              placeholder="Please enter password"
              secureTextEntry
              containerStyle={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <IText textStyle={styles.errorText}>{errors.loginName}</IText>
            )}
            <View style={styles.rememberMeContainer}>
              <View style={{flex: 1}}>
                <CheckBox
                  position="left"
                  label="Remember Me"
                  value={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
              </View>
              <View>
                <TouchableOpacity onPress={ForgetPasswordScreenNavigation}>
                  <IText textType="regular" textStyle={styles.forgetPassword}>
                    Forgot Password?
                  </IText>
                </TouchableOpacity>
              </View>
            </View>

            <IButton
              title="Sign In"
              style={[styles.loginButton]}
              onPress={handleSubmit}
            />

            <View style={styles.SignUpContainer}>
              <IText textStyle={styles.createNewAccount}>
                Don't have an account?{' '}
              </IText>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <IText textStyle={styles.signUpLink}>Sign Up</IText>
              </TouchableOpacity>
            </View>
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
  },
  input: {
    marginVertical: 10,
  },
  createNewAccountContainer: {
    alignSelf: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  forgetPassword: {
    color: IIC_BLUE,
    marginBottom: 10,
    marginVertical: 10,
    fontSize: 14,
  },
  createNewAccount: {
    color: '#333333',
    alignSelf: 'center',
    marginVertical: 20,
  },
  loginButton: {
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

  errorText: {
    color: 'red',
    fontSize: 12,
    // marginTop: 1,
  },

  signUpLink: {
    color: IIC_BLUE,
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
    marginLeft: 0,
  },

  SignUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 150,
  },
});

export default LoginScreen;
