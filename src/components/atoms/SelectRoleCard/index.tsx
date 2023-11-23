import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IText from '../Text';
import DummyImage from '../../../assets/images/Profile.jpg';
import {GREEN, WHITE} from '../../../common/colors';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {ROLES} from '../../../common/constant';

interface SelectRoleCardProps {
  image: any;
  selectedValue?: any;
  onSelect: any;
  label: any;
  color: any;
  item: any;
}

const SelectRoleCard: React.FC<SelectRoleCardProps> = ({
  image,
  onSelect,
  label,
  color,
  item,
  selectedValue,
}) => {
  const navigation: any = useNavigation();
  const handleChange = () => {
    onSelect(item);
    if (item?.role === 'transportUser') navigation.push('TransportUser');
    if (item?.role === 'transportCompany') navigation.push('TransportCompany');
    if (item?.role === 'driver') navigation.push('DriverRegistration');
  };
  return (
    <View
      style={{
        marginVertical: 12,
        position: 'relative',
        marginBottom: 20,
      }}>
      <TouchableOpacity
        onPress={() => handleChange()}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   elevation: 4,
          backgroundColor: color,
          borderRadius: 10,
          padding: 12,
          borderWidth: 1,
          borderColor:
            selectedValue?.role === item?.role ? item?.border : color,
          // marginBottom:20
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            source={image ?? DummyImage}
            style={{width: 100, height: 100}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <IText textStyle={{fontSize: 20, lineHeight: 24}}>{label}</IText>
        </View>
      </TouchableOpacity>
      {selectedValue?.role === item?.role && (
        <View
          style={{
            position: 'absolute',
            bottom: -22,
            justifyContent: 'center',
            alignItems: 'center',
            left: '20%',
            right: '20%',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: item?.border,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name="check" style={{fontSize: 30, color: WHITE}} />
          </View>
        </View>
      )}
    </View>
  );
};

export default SelectRoleCard;

const styles = StyleSheet.create({});
