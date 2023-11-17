import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DARKBLUE, WHITE} from '../../../common/colors';
import IText from '../Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

interface CustomHeaderProps {
  title?: any;
  closeBtn?: boolean;
  onClose?: any;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  closeBtn,
  onClose,
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: DARKBLUE,
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}>
        <View style={{flex: 1}}>
          <IText textStyle={{textAlign: 'center', color: WHITE, fontSize: 20}}>
            {title}
          </IText>
        </View>
        <TouchableOpacity onPress={onClose}>
          <MaterialIcons name="close" style={{fontSize: 24, color: WHITE}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
