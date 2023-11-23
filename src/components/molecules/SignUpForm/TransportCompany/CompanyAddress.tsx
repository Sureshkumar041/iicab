import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DARKBLUE} from '../../../../common/colors';
import Dropdown from '../../../atoms/Dropdown';
import IText from '../../../atoms/Text';
import ITextInput from '../../../atoms/TextInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IButton from '../../../atoms/Button';

interface CompanyAddressProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const CompanyAddress: React.FC<CompanyAddressProps> = ({
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
          name="location-on"
          style={{fontSize: 26, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          Transport Company Address
        </IText>
      </View>
      <View>
        <ITextInput
          label={'Street Address'}
          placeholder="Please enter street address"
        />
        <ITextInput
          label={'Building'}
          placeholder="Please enter building nanme"
        />
        <ITextInput label={'City'} placeholder="Please enter city name" />
        <Dropdown
          label={'Country'}
          placeholder="Select country"
          value={depot}
          itemList={options}
          onSelect={setDepot}
        />
        <ITextInput
          label={'State / Providence'}
          placeholder="Please enter state"
        />
        <ITextInput label={'Zip Code'} placeholder="Please enter zip code" />
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

export default CompanyAddress;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
});
