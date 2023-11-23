import {StyleSheet, View} from 'react-native';
import IButton from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import AttachmentInput from '../../../atoms/TextInput/AttachmentInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IText from '../../../atoms/Text';
import {DARKBLUE} from '../../../../common/colors';
import {useState} from 'react';
import AttachmentList from '../../../atoms/AttachmentCard/AttachmentCardList';
import ITextInput from '../../../atoms/TextInput';

interface ContractAndCertificateProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const ContractAndCertificate: React.FC<ContractAndCertificateProps> = ({
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
  const [upload, setUpload] = useState<any>([]);
  const [description, setDescription] = useState<any>();

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
        <MaterialCommunityIcons
          name="file-document-outline"
          style={{fontSize: 26, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          Contract & Certificate
        </IText>
      </View>
      <View>
        <AttachmentInput
          label={'Contract Start Date'}
          placeholder="PLease enter contract start date"
          inputType={'date'}
        />
        <AttachmentInput
          label={'Contract End Date'}
          placeholder="Please enter contract end date"
          inputType={'date'}
        />
        <Dropdown
          label={'Associated Depots'}
          placeholder="Please select"
          value={depot}
          itemList={options}
          onSelect={setDepot}
          multiSelector
        />
        <ITextInput
          value={description}
          onChangeText={setDescription}
          label={'Attachment Description'}
          placeholder="Please enter attachment description"
        />
        {/* <AttachmentInput
          label={'Contract Document'}
          placeholder="Please upload contract document"
          inputType={'document'}
          onChange={setUpload}
        /> */}
        <AttachmentInput
          disabled={Boolean(!description)}
          label={'Contract Document'}
          placeholder="Please upload contract document"
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
        <IButton
          title={'Next'}
          style={{flex: 1}}
          onPress={() => handlePage('next')}
        />
      </View>
    </View>
  );
};

export default ContractAndCertificate;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
});
