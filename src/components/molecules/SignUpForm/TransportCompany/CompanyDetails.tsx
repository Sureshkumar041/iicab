import {StyleSheet, View} from 'react-native';
import IButton from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import IText from '../../../atoms/Text';
import ITextInput from '../../../atoms/TextInput';
import AttachmentInput from '../../../atoms/TextInput/AttachmentInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DARKBLUE} from '../../../../common/colors';
import {useState} from 'react';
import ImagePreview from '../../../atoms/ImagePreviewList';

interface CompanyDetailsProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
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
  const [logo, setLogo] = useState<any>();

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
      <View>
        <View style={styles.headingContainer}>
          <MaterialIcons
            name="emoji-transportation"
            style={{fontSize: 26, color: DARKBLUE}}
          />
          <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
            Transport Company Information
          </IText>
        </View>
        <View>
          <AttachmentInput
            value={logo}
            onChange={setLogo}
            label={'Logo'}
            placeholder="Please upload logo"
            inputType={'logo'}
          />
          <ITextInput
            label={'Company Name'}
            placeholder="Please enter company name"
          />
          <Dropdown
            label={'Company Type'}
            placeholder="Select company type"
            value={depot}
            itemList={options}
            onSelect={setDepot}
          />
          <ITextInput
            label={'Recovery Email Id'}
            placeholder="Please enter recovery email id"
          />
          <ITextInput
            label={'Contact No'}
            placeholder="Please enter contact no"
          />
          <ITextInput label={'Fax No'} placeholder="Please enter fax no" />
        </View>
        <View>
          <IButton title={'Next'} onPress={() => handlePage('next')} />
        </View>
      </View>
    </View>
  );
};

export default CompanyDetails;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
});
