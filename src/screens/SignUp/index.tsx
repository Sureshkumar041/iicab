import {Image, StatusBar, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BLUE, DARKBLUE, WHITE} from '../../common/colors';
import SignUpImage from '../../assets/images/signUp.png';
import RadioField from '../../components/molecules/RadioField';
import {height, RoleOptions} from '../../common/constant';
import {useState} from 'react';
import ITextInput from '../../components/atoms/TextInput';
import Dropdown from '../../components/atoms/Dropdown';
import IButton from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import TransportUserRegistration from './TransportUserRegistration';
import TransportCompanyRegistration from './TransportCompanyRegistration';
import DriverRegistration from './DriverRegistration';
import CustomHeader from '../../components/atoms/CustomHeader';

const SignUp = () => {
  const [role, setRole] = useState<any>(RoleOptions[0]);
  const options = [
    {value: 'Driver', field: 'Driver'},
    {value: 'Transporter', field: 'Transporter'},
    {value: 'Transportation companies', field: 'Transportation companies'},
    {value: 'Developer', field: 'Developer'},
    {value: 'Tester', field: 'Tester'},
    {value: 'Admin', field: 'Admin'},
  ];
  const [depot, setDepot] = useState<any>([]);

  return (
    <View>
      <KeyboardAwareScrollView>
        <StatusBar barStyle={'light-content'} backgroundColor={DARKBLUE} />
        <CustomHeader title={'Sign Up'} previous />
        <View
          style={{
            backgroundColor: WHITE,
            minHeight: height,
            paddingVertical: 15,
          }}>
          <View style={{paddingHorizontal: 15}}>
            <View style={{alignItems: 'center'}}>
              {/* <Image
                source={SignUpImage}
                resizeMode={'contain'}
                style={{width: 200, height: 150}}
              /> */}
            </View>
            <RadioField
              label={'Choose User Type'}
              options={RoleOptions}
              selectedValue={role}
              onChange={setRole}
            />
            {/* <Dropdown
              label={'Choose User Type'}
              placeholder="Select company type"
              value={depot}
              itemList={options}
              onSelect={setDepot}
            /> */}
          </View>
          {role?.role === 'transportUser' && <TransportUserRegistration />}
          {role?.role === 'transportCompany' && (
            <TransportCompanyRegistration />
          )}
          {role?.role === 'driver' && <DriverRegistration />}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
