import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import IText from '../Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {BORDER_INPUT, GREY, PLACEHOLDER} from '../../../common/colors';
import TextLabel from '../TextLabel';

interface ITextInputProps {
  value?: any;
  onChangeText?: any;
  label?: any;
  editable?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  numberOfLines?: TextInputProps['numberOfLines'];
  placeholder?: TextInputProps['placeholder'];
  secureTextEntry?: boolean;
  multiline?: boolean;
}

const ITextInput: React.FC<ITextInputProps> = ({
  value,
  onChangeText,
  label,
  editable,
  keyboardType,
  numberOfLines,
  secureTextEntry,
  placeholder,
  multiline,
}) => {
  const [secureText, setSecureText] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View style={{marginBottom: 12}}>
      {label && <TextLabel>{label}</TextLabel>}
      <View
        style={[
          styles.textContainer,
          {
            borderColor: isFocus ? '#3276B1' : BORDER_INPUT,
          },
        ]}>
        <TextInput
          style={{
            paddingVertical: 4,
            flex: 1,
            textAlignVertical: multiline ? 'top' : 'center',
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={PLACEHOLDER}
          numberOfLines={numberOfLines}
          editable={editable}
          keyboardType={keyboardType}
          secureTextEntry={secureText && secureTextEntry}
          multiline={multiline}
          onFocus={(e: any) => setIsFocus(true)}
          onBlur={(e: any) => setIsFocus(false)}
        />
        {secureTextEntry && (
          <View
            style={{
              flexDirection: 'row',
              columnGap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 22,
                width: 2,
                backgroundColor: GREY,
                borderRadius: 10,
              }}></View>
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              {secureText ? (
                <Ionicons name="eye" style={{fontSize: 20, color: GREY}} />
              ) : (
                <Ionicons name="eye-off" style={{fontSize: 20, color: GREY}} />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ITextInput;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    marginBottom: 6,
  },
  textContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    columnGap: 8,
    paddingHorizontal: 8,
  },
});
