import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BORDER_INPUT, LIGHTBLUE} from '../../../common/colors';

interface SearchBarProp {
  value?: any;
  onChangeText?: any;
  editable?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: TextInputProps['placeholder'];
  multiline?: boolean;
  iconName?: string;
}

const SearchInput: React.FC<SearchBarProp> = ({
  value,
  onChangeText,
  editable,
  keyboardType,
  placeholder,
  iconName,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View
      style={[
        styles.textContainer,
        {
          borderColor: isFocus ? LIGHTBLUE : BORDER_INPUT,
        },
      ]}>
      <TextInput
        style={{
          paddingVertical: 4,
          flex: 1,
        }}
        value={value}
        onChangeText={onChangeText}
        onFocus={(e: any) => setIsFocus(true)}
        onBlur={(e: any) => setIsFocus(false)}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <MaterialIcons
          name="search"
          style={{fontSize: 20, color: isFocus ? LIGHTBLUE : BORDER_INPUT}}
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
});
