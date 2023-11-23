import {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DARKBLUE, WHITE} from '../../common/colors';
import IButton from '../../components/atoms/Button';
import Dropdown from '../../components/atoms/Dropdown';
import IText from '../../components/atoms/Text';
import ITextInput from '../../components/atoms/TextInput';
import AttachmentInput from '../../components/atoms/TextInput/AttachmentInput';
import Switch from '../../components/atoms/ToggleSwitch';
import UserPng from '../../assets/icons/user.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from '../../components/atoms/ProgressBar';
import DriverInfo from '../../components/molecules/SignUpForm/DriverRegistration/DriverInformation';
import ContractAndCertificate from '../../components/molecules/SignUpForm/DriverRegistration/ContractAndCertificate';
import TruckDetails from '../../components/molecules/SignUpForm/DriverRegistration/TruckDetails';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../components/atoms/CustomHeader';
import DriverAddress from '../../components/molecules/SignUpForm/DriverRegistration/DriverAddress';

interface DriverRegistrationProps {
  role?: any;
  openCamera?: boolean;
  setOpenCamera?: any;
}

const DriverRegistration: React.FC<DriverRegistrationProps> = ({
  role,
  openCamera,
  setOpenCamera,
}) => {
  const [currentStep, setCurrentStep] = useState<any>(1),
    [step, setStep] = useState<any>([
      {step: 1, name: 'Driver Information'},
      {step: 2, name: 'Driver Address'},
      {step: 3, name: 'Contract & Certificate'},
      {step: 4, name: 'Truck Details'},
    ]),
    [totalStep, setTotalStep] = useState<number>(3),
    [completedStep, setCompletedStep] = useState<any>([]);

  return (
    <KeyboardAwareScrollView>
      <CustomHeader title={'Sign Up'} previous />
      <View>
        <View style={styles.sectionView}>
          <IText textType={'medium'} textStyle={styles.heading}>
            Registering as Driver
          </IText>
          <View>
            <ProgressBar
              options={step}
              completedOption={completedStep}
              currentStep={currentStep}
            />
          </View>
          {currentStep === 1 && (
            <DriverInfo
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              completedStep={completedStep}
              setCompletedStep={setCompletedStep}
            />
          )}
          {currentStep === 2 && (
            <DriverAddress
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              completedStep={completedStep}
              setCompletedStep={setCompletedStep}
            />
          )}
          {currentStep === 3 && (
            <ContractAndCertificate
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              completedStep={completedStep}
              setCompletedStep={setCompletedStep}
            />
          )}
          {currentStep === 4 && (
            <TruckDetails
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              completedStep={completedStep}
              setCompletedStep={setCompletedStep}
            />
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default DriverRegistration;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 14,
  },
  sectionView: {
    backgroundColor: WHITE,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 14,
  },
});
