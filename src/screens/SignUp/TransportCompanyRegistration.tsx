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

interface TransportCompanyProps {
  role?: any;
}

const TransportCompanyRegistration: React.FC<TransportCompanyProps> = ({
  role,
}) => {
  const navigation = useNavigation();
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
  return (
    <View>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionView}>
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
            <AttachmentInput
              label={'Logo'}
              placeholder="Please upload logo"
              inputType={'photo'}
            />
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
            <ITextInput
              label={'Zip Code'}
              placeholder="Please enter zip code"
            />
            <ITextInput
              label={'Contact No'}
              placeholder="Please enter contact no"
            />
            <ITextInput label={'Fax No'} placeholder="Please enter fax no" />
            <ITextInput
              label={'Recovery Email Id'}
              placeholder="Please enter recovery email id"
            />
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
            <AttachmentInput
              label={'Attachment'}
              placeholder="Please upload attachment"
              inputType={'document'}
            />
            <ITextInput
              label={'SCAC Code'}
              placeholder="Please enter SCAC code"
            />
            <ITextInput
              label={'US DOT Permit No'}
              placeholder="Please enter details"
            />
            <ITextInput
              label={'Motor Carrier Permit No'}
              placeholder="Please enter details"
            />
            <IButton title={'Sign Up'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransportCompanyRegistration;

const styles = StyleSheet.create({
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
