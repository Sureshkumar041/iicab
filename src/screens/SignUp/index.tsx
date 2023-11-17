import {Image, StatusBar, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BLUE, DARKBLUE} from '../../common/colors';
import IDepoLogo from '../../assets/icons/iInterchange_iDepo.png';
import RadioField from '../../components/molecules/RadioField';
import {height, RoleOptions} from '../../common/constant';
import {useState} from 'react';
import ITextInput from '../../components/atoms/TextInput';
import Dropdown from '../../components/atoms/Dropdown';
import IButton from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const options = [
    {value: 'Driver', field: 'Driver'},
    {value: 'Transporter', field: 'Transporter'},
    {value: 'Transportation companies', field: 'Transportation companies'},
    {value: 'Developer', field: 'Developer'},
    {value: 'Tester', field: 'Tester'},
    {value: 'Admin', field: 'Admin'},
  ];
  const [role, setRole] = useState<any>();
  const [depot, setDepot] = useState<any>([]);
  const [transportCompany, setTransportCompany] = useState<any>([]);
  return (
    <View>
      <KeyboardAwareScrollView>
        <StatusBar barStyle={'light-content'} backgroundColor={DARKBLUE} />
        <View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={IDepoLogo}
              resizeMode={'contain'}
              style={{width: 200, height: 150}}
            />
          </View>
          <View style={{padding: 12}}>
            <RadioField
              label={'Select User Type'}
              options={RoleOptions}
              selectedValue={role}
              onChange={setRole}
            />
            <ITextInput
              label={'First Name'}
              placeholder="Please enter first name"
            />
            <ITextInput
              label={'Last Name'}
              placeholder="Please enter last name"
            />
            <ITextInput
              label={'Email'}
              placeholder="Please enter email"
              keyboardType={'email-address'}
            />
            <Dropdown
              label={'Depot Associated'}
              placeholder="Please select"
              value={depot}
              itemList={options}
              onSelect={setDepot}
            />
            <Dropdown
              label={'Transport Company'}
              placeholder="Please select"
              value={transportCompany}
              itemList={options}
              onSelect={setTransportCompany}
              multiSelector={true}
            />
            <ITextInput
              label={'Login Name'}
              placeholder="Please enter login name"
            />
            <ITextInput
              label={'Passowrd'}
              placeholder="Please enter password"
            />
            <IButton
              title={'Sign Up'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
