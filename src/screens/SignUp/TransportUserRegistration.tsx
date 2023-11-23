import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BORDER_INPUT, DARKBLUE, PLACEHOLDER, WHITE} from '../../common/colors';
import AttachmentList from '../../components/atoms/AttachmentCard/AttachmentCardList';
import IButton from '../../components/atoms/Button';
import Dropdown from '../../components/atoms/Dropdown';
import ImagePreview from '../../components/atoms/ImagePreviewList';
import IText from '../../components/atoms/Text';
import ITextInput from '../../components/atoms/TextInput';
import AttachmentInput from '../../components/atoms/TextInput/AttachmentInput';
import UserPng from '../../assets/icons/user.png';
import CustomHeader from '../../components/atoms/CustomHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UserInformation from '../../components/molecules/SignUpForm/TransportUser/UserInformation';
import OtherInformation from '../../components/molecules/SignUpForm/TransportUser/OtherInformation';
import ProgressBar from '../../components/atoms/ProgressBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {height} from '../../common/constant';

interface TransportUserProps {
  role?: any;
  openCamera?: boolean;
  setOpenCamera?: any;
}

const TransportUserRegistration: React.FC<TransportUserProps> = ({
  role,
  openCamera,
  setOpenCamera,
}) => {
  const [currentStep, setCurrentStep] = useState<any>(1),
    [step, setStep] = useState<any>([
      {step: 1, name: 'User Information'},
      {step: 2, name: 'Other Information'},
    ]),
    [totalStep, setTotalStep] = useState<number>(3),
    [completedStep, setCompletedStep] = useState<any>([]);
  const navigation = useNavigation();
  const options = [
    {value: 'Driver', field: 'Driver'},
    {value: 'Transporter', field: 'Transporter'},
    {value: 'Transportation companies', field: 'Transportation companies'},
    {value: 'Developer', field: 'Developer'},
    {value: 'Tester', field: 'Tester'},
    {value: 'Admin', field: 'Admin'},
  ];
  const [depot, setDepot] = useState<any>([]);
  const [transportCompany, setTransportCompany] = useState<any>([]);
  const [profileImg, setProfileImg] = useState<any>();
  const [upload, setUpload] = useState<any>([]);
  return (
    <KeyboardAwareScrollView>
      <CustomHeader title={'Sign Up'} previous />
      <View>
        <View style={styles.sectionView}>
          <IText textType={'medium'} textStyle={styles.heading}>
            Registering as Transport User
          </IText>
          <View>
            <ProgressBar
              options={step}
              completedOption={completedStep}
              currentStep={currentStep}
            />
          </View>
          <View style={{flex: 1}}>
            {currentStep === 1 && (
              <UserInformation
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                completedStep={completedStep}
                setCompletedStep={setCompletedStep}
              />
            )}
            {currentStep === 2 && (
              <OtherInformation
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                completedStep={completedStep}
                setCompletedStep={setCompletedStep}
              />
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default TransportUserRegistration;

const styles = StyleSheet.create({
  sectionView: {
    backgroundColor: WHITE,
    paddingTop: 15,
    paddingHorizontal: 15,
    minHeight: height,
  },
  headingContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 14,
  },
  heading: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 14,
  },
});
