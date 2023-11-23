import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DARKBLUE} from '../../../../common/colors';
import AttachmentList from '../../../atoms/AttachmentCard/AttachmentCardList';
import IButton from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import IText from '../../../atoms/Text';
import ITextInput from '../../../atoms/TextInput';
import AttachmentInput from '../../../atoms/TextInput/AttachmentInput';

interface TruckDetailsProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const TruckDetails: React.FC<TruckDetailsProps> = ({
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

  return (
    <View>
      <View style={styles.headingContainer}>
        <MaterialCommunityIcons
          name="truck-cargo-container"
          style={{fontSize: 26, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          Truck Details
        </IText>
      </View>
      <View>
        <ITextInput
          label={'VIN Number'}
          placeholder="Please enter VIN number"
        />
        <Dropdown
          label={'Country'}
          placeholder="Please select"
          value={depot}
          itemList={options}
          onSelect={setDepot}
        />
        <ITextInput
          label={'State / Providence'}
          placeholder="Please enter state"
        />
        <ITextInput label={'Plate No'} placeholder="Please enter plate no" />
        <Dropdown
          label={'Fuel Type'}
          placeholder="Please select"
          value={depot}
          itemList={options}
          onSelect={setDepot}
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
          onChange={setUpload}
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

export default TruckDetails;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
});
