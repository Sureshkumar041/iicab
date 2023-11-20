import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DARKBLUE, WHITE} from '../../common/colors';
import {RoleOptions} from '../../common/constant';
import AttachmentList from '../../components/atoms/AttachmentCard/AttachmentCardList';
import IButton from '../../components/atoms/Button';
import Dropdown from '../../components/atoms/Dropdown';
import ImagePreview from '../../components/atoms/ImagePreviewList';
import IText from '../../components/atoms/Text';
import ITextInput from '../../components/atoms/TextInput';
import AttachmentInput from '../../components/atoms/TextInput/AttachmentInput';
import RadioField from '../../components/molecules/RadioField';
import UserPng from '../../assets/icons/user.png';

interface TransportUserProps {
  role?: any;
}

const TransportUserRegistration: React.FC<TransportUserProps> = ({role}) => {
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
            <Image
              source={UserPng}
              style={{width: 20, height: 20, tintColor: DARKBLUE}}
            />
            <IText textType={'bold'} textStyle={{color: DARKBLUE}}>
              Transport User Information
            </IText>
          </View>
          <View>
            <ITextInput
              label={'First Name'}
              placeholder="Please enter first name"
            />
            <ITextInput
              label={'Last Name'}
              placeholder="Please enter last name"
            />
            <ITextInput
              label={'Email'}
              placeholder="Please enter email"
              keyboardType={'email-address'}
            />
            <AttachmentInput
              label={'Photo'}
              placeholder="Please upload photo"
              inputType={'photo'}
            />
            <ImagePreview item={{}} />
            <AttachmentInput
              label={'Attachment'}
              placeholder="Please upload attachment"
              inputType={'document'}
            />
            <AttachmentList />
            <Dropdown
              label={'Depot Associated'}
              placeholder="Please select"
              value={depot}
              itemList={options}
              onSelect={setDepot}
            />
            <Dropdown
              label={'Transport Company'}
              placeholder="Please select"
              value={transportCompany}
              itemList={options}
              onSelect={setTransportCompany}
              multiSelector={true}
            />
            <ITextInput
              label={'Login Name'}
              placeholder="Please enter login name"
            />
            <ITextInput
              label={'Passowrd'}
              placeholder="Please enter password"
            />
            <IButton title={'Sign Up'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransportUserRegistration;

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
