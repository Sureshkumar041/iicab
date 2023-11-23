import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DARKBLUE} from '../../../../common/colors';
import AttachmentList from '../../../atoms/AttachmentCard/AttachmentCardList';
import IButton from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import IText from '../../../atoms/Text';
import AttachmentInput from '../../../atoms/TextInput/AttachmentInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ITextInput from '../../../atoms/TextInput';

interface OtherInformationProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const OtherInformation: React.FC<OtherInformationProps> = ({
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
  const [transportCompany, setTransportCompany] = useState<any>([]);
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
          name="information"
          style={{fontSize: 24, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          Other Information
        </IText>
      </View>
      <View>
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
        <Dropdown
          label={'Depot Associated'}
          placeholder="Please select"
          value={depot}
          itemList={options}
          onSelect={setDepot}
          multiSelector={true}
        />
        <Dropdown
          label={'Transport Company'}
          placeholder="Please select"
          value={transportCompany}
          itemList={options}
          onSelect={setTransportCompany}
        />
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

export default OtherInformation;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
});
