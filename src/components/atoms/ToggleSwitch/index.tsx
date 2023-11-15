import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DANGER, GREEN, WHITE} from '../../../common/colors';
import IText from '../Text';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import ClosePng from '../../../assets/icons/close.png';
import TextLabel from '../TextLabel';

interface SwitchProps {
  value?: boolean;
  disabled?: boolean;
  onToggleSwitch?: any;
  label?: any;
}

const Switch: React.FC<SwitchProps> = ({
  value,
  disabled,
  onToggleSwitch,
  label,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(value ? value : false);
  const handleSwitch = () => {
    onToggleSwitch(!isSelected);
    setIsSelected(!isSelected);
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {label && (
        <View style={{flex: 1}}>
          <TextLabel>{label}</TextLabel>
        </View>
      )}
      <TouchableOpacity
        disabled={disabled}
        onPress={() => handleSwitch()}
        style={[
          styles.switchContainer,
          {
            backgroundColor: isSelected ? GREEN : DANGER,
            justifyContent: isSelected ? 'flex-start' : 'flex-end',
          },
        ]}>
        {/* Visible if not selected */}
        {!isSelected && (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => handleSwitch()}
            style={[
              styles.iconContainer,
              {
                left: -10,
              },
            ]}>
            <Image
              source={ClosePng}
              style={{width: 25, height: 14, tintColor: DANGER}}
            />
          </TouchableOpacity>
        )}
        <View>
          <IText textStyle={{color: WHITE}}>{isSelected ? 'YES' : 'NO'}</IText>
        </View>
        {/* Visible if selected */}
        {isSelected && (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => handleSwitch()}
            style={[
              styles.iconContainer,
              {
                right: -10,
              },
            ]}>
            <Feather name="check" style={{fontSize: 20, color: GREEN}} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  switchContainer: {
    position: 'relative',
    width: '20%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: 16,
    marginVertical: 12,
    marginBottom: 12,
  },
  iconContainer: {
    backgroundColor: WHITE,
    borderRadius: 25,
    width: 40,
    aspectRatio: 1 / 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
