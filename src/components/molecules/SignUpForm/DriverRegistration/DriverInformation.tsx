import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import UserPng from '../../../../assets/icons/user.png';
import {DARKBLUE} from '../../../../common/colors';
import IButton from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import ImagePreview from '../../../atoms/ImagePreviewList';
import IText from '../../../atoms/Text';
import ITextInput from '../../../atoms/TextInput';
import AttachmentInput from '../../../atoms/TextInput/AttachmentInput';
import Switch from '../../../atoms/ToggleSwitch';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DriverInfoProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const DriverInfo: React.FC<DriverInfoProps> = ({
  currentStep,
  setCompletedStep,
  completedStep,
  setCurrentStep,
}) => {
  const options = [
    {value: 'Driver', field: 'Driver'},
    {value: 'Transporter', field: 'Transporter'},
    {value: 'Transportation companies', field: 'Transportation companies'},
    {value: 'Developer', field: 'Developer'},
    {value: 'Tester', field: 'Tester'},
    {value: 'Admin', field: 'Admin'},
  ];
  const [depot, setDepot] = useState<any>([]);
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<any>(null);

  const handlePage = (btnType: string) => {
    if (btnType === 'next') {
      setCompletedStep((prev: any) =>
        Array.from({length: currentStep}, (_, index) => index + 1),
      );
    } else {
      setCompletedStep((prev: any) =>
      Array.from({length: completedStep?.length - 1}, (_, index) => index + 1),
      );
    }
    setCurrentStep(btnType === 'prev' ? currentStep - 1 : currentStep + 1);
  };

  const handleToggle = (e: any) => {
    setToggleSwitch(e);
  };

  return (
    <View>
      <View style={styles.headingContainer}>
        <MaterialCommunityIcons
          name="account"
          style={{fontSize: 24, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          Driver Information
        </IText>
      </View>

      <View>
        <AttachmentInput
          label={'Photo'}
          placeholder="Please upload photo"
          inputType={'photo'}
          onChange={setProfileImage}
        />
        <ITextInput
          label={'First Name'}
          placeholder="Please enter first name"
        />
        <ITextInput label={'Last Name'} placeholder="Please enter last name" />
        <ITextInput
          label={'Login Name'}
          placeholder="Please enter login name"
        />
        <ITextInput label={'Email'} placeholder="Please enter email" />
        <ITextInput label={'Password'} placeholder="Please enter password" />
        <ITextInput label={'Phone No'} placeholder="Please enter phone no" />
        <ITextInput
          label={'CDL Number'}
          placeholder="Please enter CDL number"
        />
        <AttachmentInput
          label={'CDL Expiry Date'}
          placeholder="Please enter details"
          inputType={'date'}
        />
      </View>
      <View>
        <IButton title={'Next'} onPress={() => handlePage('next')} />
      </View>
    </View>
  );
};

export default DriverInfo;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
    backgroundColor: 'rgba(255, 255, 255,0.5)',
  },
});
