import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IText from '../../components/atoms/Text';
import IButton from '../../components/atoms/Button';
import ITextInput from '../../components/atoms/TextInput';
import {height} from '../../common/constant';
import {useNavigation} from '@react-navigation/native';
import {DANGER, DARKBLUE, IIC_BLUE} from '../../common/colors';
import CheckBox from '../../components/atoms/CheckBox';
import {loginValidation} from '../../common/formValidation';
import {Formik} from 'formik';
import requestMultiplePermissions from '../../common/RequestPermission';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginUserData} from '../../redux/action/userAction';
import {connect} from 'react-redux';

const LoginScreen = () => {
  const [fieldValues, setFieldValues] = useState<any>({
    loginName: null,
    password: null,
  });
  const userData = useSelector((state: any) => state.UserReducer.userData);
  const accessToken = useSelector(
    (state: any) => state.UserReducer.accessToken,
  );

  const [rememberMe, setRememberMe] = useState(false);
  const navigation: any = useNavigation();

  const ForgetPasswordScreenNavigation = () => {
    navigation.push('ForgetPasswordScreen');
  };
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const userData = {
      userId: 123,
      loginName: 'john_doe',
    };
    console.log('Current Redux State:', {userData, accessToken});
    dispatch(setLoginUserData(userData));
    console.log('Updated Redux State:', {userData, accessToken});
    console.log('Verified');
    Alert.alert('Successfully Logged In, Thank you!');
  };

  //Permissions Asking
  useEffect(() => {
    requestMultiplePermissions();
  }, []);

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
          handleLogin(); // Call the handleLogin function after form submission
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
              errorMsg={
                touched.loginName && errors.loginName && errors.loginName
              }
            />

            <ITextInput
              iconName="password"
              label={'Password'}
              placeholder="Please enter password"
              secureTextEntry
              containerStyle={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorMsg={touched.password && errors.password && errors.password}
            />

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
    width: 200,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  loginTitle: {
    fontSize: 18,
    // paddingVertical: 25,
    // paddingBottom: 20,
    alignSelf: 'center',
    color: IIC_BLUE,
  },
  input: {
    marginVertical: 10,
  },
  createNewAccountContainer: {
    alignSelf: 'center',
    // marginVertical: 10,
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
    // marginVertical: 10,
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
    color: DANGER,
    fontSize: 12,
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
    marginTop: 120,
  },
});
const mapStateToProps = (state: any) => {
  return {
    userData: state.UserReducer.userData,
    accessToken: state.UserReducer.accessToken,
  };
};

export default connect(mapStateToProps)(LoginScreen);


//Arch Design Login Page

// import React from 'react';

// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
// } from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import IText from '../../components/atoms/Text';
// import IButton from '../../components/atoms/Button';
// import ITextInput from '../../components/atoms/TextInput';
// import {height} from '../../common/constant';
// import {useNavigation} from '@react-navigation/native';
// import {IIC_ASH, IIC_BLUE} from '../../common/colors';
// import Gif from 'react-native-gif';

// const PasswordVerifiedScreen = () => {
//   const navigation: any = useNavigation();

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   return (
//     <KeyboardAwareScrollView
//       keyboardShouldPersistTaps="handled"
//       style={{
//         padding: 12,
//         flex: 1,
//         backgroundColor: '#fff',
//         height: height,
//       }}>
//       <StatusBar />
//       <View style={styles.container}>
//         <Image
//           source={require('../../assets/images/verifyTick.png')}
//           style={styles.image}
//         />
//         <IText textType="bold" textStyle={styles.forgotTitle}>
//           Password Changed !
//         </IText>
//         <IText textType="regular" textStyle={styles.instruction}>
//           Your password has been Changed Successfully
//         </IText>

//         <IButton
//           title="Back to Login"
//           style={[styles.sendButton]}
//           onPress={() => navigation.push('LoginScreen')}
//         />
//       </View>
//     </KeyboardAwareScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 15,
//     // height: height,
//   },
//   goBack: {
//     color: IIC_BLUE,
//     alignSelf: 'center',
//     marginBottom: 10,
//     paddingTop: 10,
//   },

//   image: {
//     width: 180,
//     height: 150,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginTop: 150,
//   },
//   forgotTitle: {
//     fontSize: 28,
//     paddingTop: 40,
//     // paddingBottom: 10,
//     alignSelf: 'center',
//     color: IIC_BLUE,
//     fontWeight: '600',
//   },
//   input: {
//     marginVertical: 10,
//   },
//   // sendButton: {
//   //   padding: 15,
//   //   borderRadius: 30,
//   //   width: '100%',
//   //   alignItems: 'center',
//   //   // marginVertical: 40,
//   // },
//   sendButton: {
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 30,
//     width: '100%',
//     alignItems: 'center',
//     backgroundColor: IIC_BLUE,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },

//   instruction: {
//     paddingVertical: 10,
//     color: IIC_ASH,
//     fontSize: 16,
//     alignSelf: 'center',
//     paddingBottom: 40,
//   },
// });

// export default PasswordVerifiedScreen;
