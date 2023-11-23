import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DARKBLUE} from '../../../../common/colors';
import IButton from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import IText from '../../../atoms/Text';
import ITextInput from '../../../atoms/TextInput';
import AttachmentInput from '../../../atoms/TextInput/AttachmentInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AttachmentList from '../../../atoms/AttachmentCard/AttachmentCardList';

interface BillingInformationProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const BillingInformation: React.FC<BillingInformationProps> = ({
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
  const [upload, setUpload] = useState<any>([]);
  const [description, setDescription] = useState<any>();

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
  const handleUploadAttachment = (doc: any) => {
    const isExist = upload?.filter(
      (item: any) => item?.doc?.name === doc?.[0]?.name,
    );
    if (isExist?.length === 0) {
      setUpload((prev: any) => [
        ...prev,
        {description: description, doc: doc?.[0]},
      ]);
      setDescription(null);
    }
  };
  return (
    <View>
      <View style={styles.headingContainer}>
        <MaterialIcons
          name="account-balance-wallet"
          style={{fontSize: 26, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          Billing Information
        </IText>
      </View>
      <View>
        <Dropdown
          label={'Classification'}
          placeholder="Select classification"
          value={depot}
          itemList={options}
          onSelect={setDepot}
        />
        <ITextInput
          label={'Exemption under'}
          placeholder="Please enter details"
        />
        <ITextInput
          label={'Tax Registration No'}
          placeholder="Please enter tax registration no"
        />
        <ITextInput label={'SCAC Code'} placeholder="Please enter SCAC code" />
        <ITextInput
          label={'US DOT Permit No'}
          placeholder="Please enter details"
        />
        <ITextInput
          label={'Motor Carrier Permit No'}
          placeholder="Please enter details"
        />
        <ITextInput
          value={description}
          onChangeText={setDescription}
          label={'Attachment Description'}
          placeholder="Please enter attachment description"
        />
        <AttachmentInput
          disabled={Boolean(!description)}
          label={'Attachment'}
          placeholder="Please upload attachment"
          inputType={'document'}
          onChange={handleUploadAttachment}
        />
        <AttachmentList uploadedList={upload} onClear={setUpload} />
      </View>
      <View style={{flexDirection: 'row', columnGap: 14}}>
        <IButton
          title={'Prev'}
          style={{flex: 1}}
          onPress={() => handlePage('prev')}
        />
        <IButton title={'Sign Up'} style={{flex: 1}} />
      </View>
    </View>
  );
};

export default BillingInformation;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
});
