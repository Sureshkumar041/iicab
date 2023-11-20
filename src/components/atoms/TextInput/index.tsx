import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import IText from '../Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {
  BLACK,
  BLUE,
  BORDER_INPUT,
  GREY,
  LIGHTBLUE,
  PLACEHOLDER,
} from '../../../common/colors';
import TextLabel from '../TextLabel';
import UserPng from '../../../assets/icons/user.png';

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
  containerStyle?: StyleProp<ViewStyle>;
  iconName?: string;
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
  containerStyle,
  iconName,
}) => {
  const [secureText, setSecureText] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View style={[{marginBottom: 12}, containerStyle]}>
      {label && <TextLabel>{label}</TextLabel>}
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
            textAlignVertical: multiline ? 'top' : 'center',
            color: BLACK,
            fontFamily: 'RobotoCondensed-Regular',
            fontSize:14
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={PLACEHOLDER}
          numberOfLines={numberOfLines}
          editable={editable}
          keyboardType={keyboardType}
          secureTextEntry={!secureText && secureTextEntry}
          multiline={multiline}
          onFocus={(e: any) => setIsFocus(true)}
          onBlur={(e: any) => setIsFocus(false)}
        />
        {iconName && (
          <View
            style={{
              borderLeftWidth: 1,
              borderColor: BORDER_INPUT,
              borderTopEndRadius: 4,
              borderBottomEndRadius: 4,
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 8,
            }}>
            {iconName === 'email' && (
              <Image
                source={UserPng}
                style={{width: 20, height: 20, tintColor: BORDER_INPUT}}
              />
            )}
            {iconName === 'password' && (
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                {secureText ? (
                  <Ionicons
                    name="eye"
                    style={{fontSize: 20, color: BORDER_INPUT}}
                  />
                ) : (
                  <Ionicons
                    name="eye-off"
                    style={{fontSize: 20, color: BORDER_INPUT}}
                  />
                )}
              </TouchableOpacity>
            )}
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
    borderRadius: 3,
    columnGap: 8,
    paddingLeft: 8,
  },
});
