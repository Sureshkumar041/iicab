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
import {SafeAreaView} from 'react-native';
import SelectRoleCard from '../../components/atoms/SelectRoleCard';
import TruckUserImg from '../../assets/images/truckUser.jpg';
import IText from '../../components/atoms/Text';

const SignUp = () => {
  const [role, setRole] = useState<any>([RoleOptions[0]]);
  const [openCamera, setOpenCamera] = useState<boolean>(true);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={WHITE} />

      <CustomHeader title={'Sign Up'} previous />
      <View
        style={{
          padding: 15,
          backgroundColor: WHITE,
          height: height,
        }}>
        <View
          style={{
            rowGap: 8,
            flex: 0.1,
            justifyContent: 'center',
          }}>
          <IText
            textStyle={{fontSize: 24, lineHeight: 26, textAlign: 'center'}}>
            Select User Type
          </IText>
        </View>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'column',
            // justifyContent: 'space-around',
          }}>
          {RoleOptions?.map((item: any, i: number) => (
            <SelectRoleCard
              key={i}
              image={item?.image}
              onSelect={setRole}
              label={item?.field}
              color={item?.color}
              item={item}
              selectedValue={role}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
