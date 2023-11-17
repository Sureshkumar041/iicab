import {StatusBar, View} from 'react-native';
import IText from '../../components/atoms/Text';
import ITextInput from '../../components/atoms/TextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useState} from 'react';
import {height} from '../../common/constant';
import IButton from '../../components/atoms/Button';
import Switch from '../../components/atoms/ToggleSwitch';
import RadioField from '../../components/molecules/RadioField';
import Dropdown from '../../components/atoms/Dropdown';
import CheckBox from '../../components/atoms/CheckBox';

const Login = () => {
  const [email, setEmail] = useState<any>(),
    [password, setPassword] = useState<any>(),
    [isSelected, setIsSelected] = useState<boolean>(false),
    options = [
      {value: 'Driver', field: 'Driver'},
      {value: 'Transporter', field: 'Transporter'},
      {value: 'Transportation companies', field: 'Transportation companies'},
    ],
    [selectedValue, setSelectedValue] = useState<any>(),
    [isChecked, setIsChecked] = useState<boolean>(false);
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
        }}>
        <IText textType="bold" textStyle={{textAlign: 'center'}}>
          Login screen
        </IText>
        <View>
          <Dropdown label={'Select'} placeholder={'Select'} />
          <ITextInput
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            keyboardType={'email-address'}
            placeholder="Please enter email"
            iconName="email"
          />
          <ITextInput
            label={'Password'}
            value={password}
            onChangeText={setPassword}
            placeholder="Please enter password"
            secureTextEntry={true}
            iconName="password"
          />
          <Switch
            label={'Select'}
            value={isSelected}
            onToggleSwitch={setIsSelected}
          />
          <RadioField
            options={options}
            onChange={setSelectedValue}
            selectedValue={selectedValue}
          />
          <CheckBox
            value={isChecked}
            onChange={setIsChecked}
            label="Label here"
          />
        </View>
        <IButton title={'Login'} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
