import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BLUE, DARKBLUE, WHITE} from '../../../common/colors';
import IText from '../Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface CustomHeaderProps {
  title?: any;
  closeBtn?: boolean;
  onClose?: any;
  previous?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  closeBtn,
  onClose,
  previous,
}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.goBack();
  };
  
  return (
    <View>
      <View
        style={{
          backgroundColor: WHITE,
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
        }}>
        {previous && (
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-back"
              style={[styles.iconStyle]}
              onPress={() => handleNavigation()}
            />
          </TouchableOpacity>
        )}
        <View style={{flex: 1,marginRight:30}}>
          <IText
            textType="bold"
            textStyle={{
              textAlign: 'center',
              color: DARKBLUE,
              fontSize: 20,
              lineHeight: 20,
            }}>
            {title}
          </IText>
        </View>
        {closeBtn && (
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" style={[styles.iconStyle]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 24,
    color: DARKBLUE,
  },
});
