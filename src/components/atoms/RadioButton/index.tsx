import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BLUE, BORDER_INPUT, DARKBLUE, WHITE} from '../../../common/colors';

interface RadioButtonProps {
  value?: boolean;
  isSelected?: boolean;
  onChange?: any;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  isSelected,
  onChange,
  disabled,
}) => {
  const handleOnSelect = () => {
    onChange(value);
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => handleOnSelect()}
      style={{
        width: 20,
        padding: 2,
        height: 20,
        marginVertical: 12,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: DARKBLUE,
      }}>
      {isSelected && (
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 50,
            backgroundColor: DARKBLUE,
          }}></View>
      )}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({});
