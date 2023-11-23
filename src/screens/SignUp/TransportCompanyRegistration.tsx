import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DARKBLUE, WHITE} from '../../common/colors';
import IButton from '../../components/atoms/Button';
import Dropdown from '../../components/atoms/Dropdown';
import IText from '../../components/atoms/Text';
import ITextInput from '../../components/atoms/TextInput';
import AttachmentInput from '../../components/atoms/TextInput/AttachmentInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from '../../components/atoms/ProgressBar';
import CompanyDetails from '../../components/molecules/SignUpForm/TransportCompany/CompanyDetails';
import BillingInformation from '../../components/molecules/SignUpForm/TransportCompany/BillingInformation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomHeader from '../../components/atoms/CustomHeader';
import CompanyAddress from '../../components/molecules/SignUpForm/TransportCompany/CompanyAddress';

interface TransportCompanyProps {
  role?: any;
  openCamera?: boolean;
  setOpenCamera?: any;
}

const TransportCompanyRegistration: React.FC<TransportCompanyProps> = ({
  role,
  openCamera,
  setOpenCamera,
}) => {
  const [currentStep, setCurrentStep] = useState<any>(1),
    [step, setStep] = useState<any>([
      {step: 1, name: 'Company Information'},
      {step: 2, name: 'Company Address'},
      {step: 3, name: 'Billing Information'},
    ]),
    [totalStep, setTotalStep] = useState<number>(3),
    [completedStep, setCompletedStep] = useState<any>([]);

  return (
    <KeyboardAwareScrollView>
      <CustomHeader title={'Sign Up'} previous />
      <View>
        <View style={styles.sectionView}>
          <IText textType={'medium'} textStyle={styles.heading}>
            Registering as Transport Company
          </IText>
          <View>
            <ProgressBar
              options={step}
              completedOption={completedStep}
              currentStep={currentStep}
            />
          </View>
          {currentStep === 1 && (
            <CompanyDetails
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              completedStep={completedStep}
              setCompletedStep={setCompletedStep}
            />
          )}
          {currentStep === 2 && (
            <CompanyAddress
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              completedStep={completedStep}
              setCompletedStep={setCompletedStep}
            />
          )}
          {currentStep === 3 && (
            <BillingInformation
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

export default TransportCompanyRegistration;

const styles = StyleSheet.create({
  sectionView: {
    backgroundColor: WHITE,
    paddingTop: 15,
    paddingHorizontal: 15,
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
