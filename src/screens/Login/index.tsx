import {StatusBar, Text, View} from 'react-native';
import IText from '../../components/atoms/Text';
import ITextInput from '../../components/atoms/TextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useState} from 'react';
import {height} from '../../common/constant';
import IButton from '../../components/atoms/Button';
import Switch from '../../components/atoms/ToggleSwitch';

const Login = () => {
  const [email, setEmail] = useState<any>(),
    [password, setPassword] = useState<any>(),
    [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={{
        padding: 12,
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <StatusBar />
      <View
        style={{
          minHeight: height,
          justifyContent: 'center',
          // rowGap: 20,
        }}>
        <IText textType="bold" textStyle={{textAlign: 'center'}}>
          Login screen
        </IText>
        <View>
          <ITextInput
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            placeholder="Please enter email"
          />
          <ITextInput
            label={'Password'}
            value={password}
            onChangeText={setPassword}
            placeholder="Please enter password"
            secureTextEntry
          />
          <Switch
            label={'Select'}
            value={isSelected}
            onToggleSwitch={setIsSelected}
          />
        </View>
        <IButton title={'Login'} />
        {/* < */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
