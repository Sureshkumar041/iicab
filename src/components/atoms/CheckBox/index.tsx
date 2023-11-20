import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {BLUE} from '../../../common/colors';
import TextLabel from '../TextLabel';

interface CheckBoxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: any;
  position?: 'right' | 'left';
}

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  onChange,
  label,
  position = 'right',
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => {
    onChange(!value);
  };
  return (
    <View style={{marginVertical: 6 }}>
      <TouchableOpacity
        onPress={() => handleCheck()}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        {position === 'right' && (
          <TextLabel labelContainer={{flex: 1}} labelStyle={{marginBottom: 0}}>
            {label}
          </TextLabel>
        )}
        <View>
          <Checkbox
            value={value}
            onValueChange={() => handleCheck()}
            tintColors={{true: BLUE, false: BLUE}}
          />
        </View>
        {position === 'left' && (
          <TextLabel labelContainer={{flex: 1}} labelStyle={{marginBottom: 0}}>
            {label}
          </TextLabel>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({});
