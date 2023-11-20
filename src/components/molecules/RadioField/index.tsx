import {useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import RadioButton from '../../atoms/RadioButton';
import IText from '../../atoms/Text';
import TextLabel from '../../atoms/TextLabel';

interface RadioFieldProps {
  options: any;
  selectedValue?: any;
  onChange: any;
  disabled?: boolean;
  label?: any;
}

const RadioField: React.FC<RadioFieldProps> = ({
  options,
  selectedValue,
  onChange,
  disabled,
  label,
}) => {
  const handleChange = (val?: any) => {
    onChange(val);
  };
  return (
    <View style={{marginTop: 4, marginBottom: 8}}>
      <TextLabel>{label}</TextLabel>
      {options?.map((item: any, i: number) => (
        <View
          key={i}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10,
            marginHorizontal: 12,
          }}>
          <RadioButton
            isSelected={
              (item?.value || item?.role) ===
              (selectedValue?.value || selectedValue?.role)
            }
            onChange={handleChange}
            value={item}
            disabled={disabled}
          />
          <TouchableOpacity
            disabled={disabled}
            onPress={() => handleChange(item)}>
            <IText>{item?.field}</IText>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default RadioField;

const styles = StyleSheet.create({});
