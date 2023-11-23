import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DARKBLUE} from '../../../../common/colors';
import Dropdown from '../../../atoms/Dropdown';
import IText from '../../../atoms/Text';
import ITextInput from '../../../atoms/TextInput';
import Switch from '../../../atoms/ToggleSwitch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IButton from '../../../atoms/Button';

interface DriverAddressProps {
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
  setCompletedStep: any;
}

const DriverAddress: React.FC<DriverAddressProps> = ({
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
      Array.from({length: completedStep?.length - 1}, (_, index) => index + 1),
      );
    }
    setCurrentStep(btnType === 'prev' ? currentStep - 1 : currentStep + 1);
  };

  const handleToggle = (e: any) => {
    setToggleSwitch(e);
  };

  return (
    <View>
      <View style={styles.headingContainer}>
        <MaterialIcons
          name="location-on"
          style={{fontSize: 26, color: DARKBLUE}}
        />
        <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
          Driver Address
        </IText>
      </View>
      <View>
        <ITextInput
          label={'Street Name'}
          placeholder="Please enter street address"
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
        <ITextInput label={'Area Code'} placeholder="Please enter area code" />
        <ITextInput label={'Local No'} placeholder="Please enter local no" />
        <ITextInput label={'Extension'} placeholder="Please enter extension" />
        <Switch
          label={'Driver has TWIC card or not'}
          value={toggleSwitch}
          onToggleSwitch={handleToggle}
        />
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

export default DriverAddress;

const styles = StyleSheet.create({
  headingContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
    backgroundColor: 'rgba(255, 255, 255,0.5)',
  },
});
