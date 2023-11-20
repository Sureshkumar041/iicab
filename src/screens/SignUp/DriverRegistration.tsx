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

interface DriverRegistrationProps {
  role?: any;
}

const DriverRegistration: React.FC<DriverRegistrationProps> = ({role}) => {
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

  const handleToggle = (e: any) => {
    setToggleSwitch(e);
  };

  return (
    <View>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionView}>
          <View style={styles.headingContainer}>
            <Image
              source={UserPng}
              style={{width: 20, height: 20, tintColor: DARKBLUE}}
            />
            <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
              Driver Information
            </IText>
          </View>
          <ITextInput
            label={'First Name'}
            placeholder="Please enter first name"
          />
          <ITextInput
            label={'Last Name'}
            placeholder="Please enter last name"
          />
          <AttachmentInput
            label={'Photo'}
            placeholder="Please upload photo"
            inputType={'photo'}
          />
          <ITextInput
            label={'Login Name'}
            placeholder="Please enter login name"
          />
          <ITextInput label={'Password'} placeholder="Please enter password" />
          <ITextInput label={'Email'} placeholder="Please enter email" />
          <ITextInput
            label={'CDL Number'}
            placeholder="Please enter CDL number"
          />
          <AttachmentInput
            label={'CDL Expiry Date'}
            placeholder="Please enter details"
            inputType={'date'}
          />
          <ITextInput label={'Phone No'} placeholder="Please enter phone no" />
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
          <ITextInput
            label={'Area Code'}
            placeholder="Please enter area code"
          />
          <ITextInput label={'Local No'} placeholder="Please enter local no" />
          <ITextInput
            label={'Extension'}
            placeholder="Please enter extension"
          />
          <Switch
            label={'Driver has TWC card or not'}
            value={toggleSwitch}
            onToggleSwitch={handleToggle}
          />
        </View>
      </View>
      {/* Contract & Certificate */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionView}>
          <View style={styles.headingContainer}>
            <MaterialCommunityIcons
              name="file-document-outline"
              style={{fontSize: 26, color: DARKBLUE}}
            />
            <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
              Contract & Certificate
            </IText>
          </View>
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
          <AttachmentInput
            label={'Contract Document'}
            placeholder="Please upload contract document"
            inputType={'document'}
          />
          <Dropdown
            label={'Associated Depots'}
            placeholder="Please select"
            value={depot}
            itemList={options}
            onSelect={setDepot}
          />
        </View>
      </View>

      {/* Truck Details */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionView}>
          <View style={styles.headingContainer}>
            <MaterialCommunityIcons
              name="truck-cargo-container"
              style={{fontSize: 26, color: DARKBLUE}}
            />
            <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
              Truck Details
            </IText>
          </View>
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
            label={'Fuel'}
            placeholder="Please select"
            value={depot}
            itemList={options}
            onSelect={setDepot}
          />
          <AttachmentInput
            label={'Attachment'}
            placeholder="Please upload attachment"
            inputType={'document'}
          />
          <IButton title={'Sign up'} />
        </View>
      </View>
    </View>
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
    elevation: 8,
    shadowOffset: {width: 1, height: 1},
    paddingTop: 15,
    paddingHorizontal: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  sectionContainer: {
    overflow: 'hidden',
    paddingTop: 5,
  },
  headingContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 14,
  },
});
