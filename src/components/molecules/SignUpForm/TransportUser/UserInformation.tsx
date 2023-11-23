import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DARKBLUE} from '../../../../common/colors';
import IButton from '../../../atoms/Button';
import IText from '../../../atoms/Text';
import ITextInput from '../../../atoms/TextInput';
import AttachmentInput from '../../../atoms/TextInput/AttachmentInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface UserInformationProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const UserInformation: React.FC<UserInformationProps> = ({
  currentStep,
  setCompletedStep,
  completedStep,
  setCurrentStep,
}) => {
  const [profileImg, setProfileImg] = useState<any>();

  const handlePage = (btnType: string) => {
    if (btnType === 'next') {
      setCompletedStep((prev: any) =>
        Array.from({length: currentStep}, (_, index) => index + 1),
      );
    } else {
      setCompletedStep((prev: any) =>
        Array.from(
          {length: completedStep?.length - 1},
          (_, index) => index + 1,
        ),
      );
    }
    setCurrentStep(btnType === 'prev' ? currentStep - 1 : currentStep + 1);
  };

  return (
    <View>
      <View style={styles.headingContainer}>
        <MaterialCommunityIcons
          name="account"
          style={{fontSize: 24, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          User Information
        </IText>
      </View>
      <View>
        <AttachmentInput
          value={profileImg}
          onChange={setProfileImg}
          label={'Photo'}
          placeholder="Please upload photo"
          inputType={'photo'}
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
        <ITextInput
          label={'Email'}
          placeholder="Please enter email"
          keyboardType={'email-address'}
        />
        <ITextInput label={'Passowrd'} placeholder="Please enter password" />
      </View>
      <View style={{flexDirection: 'row', columnGap: 14}}>
        <IButton
          title={'Prev'}
          style={{flex: 1}}
          onPress={() => handlePage('prev')}
        />
        <IButton
          title={'Next'}
          style={{flex: 1}}
          onPress={() => handlePage('next')}
        />
      </View>
    </View>
  );
};

export default UserInformation;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
});
