import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {
  BORDER_INPUT,
  DARKBLUE,
  LIGHTBLUE,
  PLACEHOLDER,
  WHITE,
} from '../../../common/colors';
import TextLabel from '../TextLabel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IText from '../Text';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

interface AttachmentInputProps {
  value?: any;
  onChangeText?: any;
  label?: any;
  editable?: boolean;
  placeholder?: TextInputProps['placeholder'];
  containerStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  multiSelector?: boolean;
  inputType?: 'date' | 'document' | 'photo';
}

const AttachmentInput: React.FC<AttachmentInputProps> = ({
  value,
  onChangeText,
  label,
  editable,
  placeholder,
  containerStyle,
  iconName,
  multiSelector,
  inputType,
}) => {
  const [secureText, setSecureText] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isDatepicker, setIsDatePicker] = useState<any>(false);
  const [date, setDate] = useState<any>();

  const handleOnPress = () => {
    if (inputType === 'date') setIsDatePicker(true);
  };

  return (
    <View style={[{marginBottom: 12}, containerStyle]}>
      {label && <TextLabel>{label}</TextLabel>}
      <TouchableOpacity
        style={[styles.textContainer]}
        onPress={() => handleOnPress()}>
        <View style={[styles.inputContainer]}>
          {inputType === 'date' && date ? (
            <IText textStyle={{fontSize: 14}}>
              {moment(date?.toString())?.format('DD-MMM-YYYY')?.toUpperCase()}
            </IText>
          ) : (
            <IText
              textStyle={{
                color: PLACEHOLDER,
                fontSize: 14,
                letterSpacing: -0.2,
              }}>
              {placeholder}
            </IText>
          )}
        </View>
        {inputType && (
          <TouchableOpacity
            style={{
              borderTopEndRadius: 3,
              borderBottomEndRadius: 3,
              height: '100%',
              width: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: DARKBLUE,
            }}>
            {(inputType === 'document' || inputType === 'photo') && (
              <MaterialCommunityIcons
                name="arrow-collapse-up"
                style={[styles.fontStyle]}
              />
            )}
            {inputType === 'date' && (
              // <FontAwesome6 name="calendar-days" style={[styles.fontStyle]} />
              <MaterialCommunityIcons
                onPress={() => handleOnPress()}
                name="calendar-month-outline"
                style={[styles.fontStyle, {fontSize: 24}]}
              />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {isDatepicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date ? new Date(date) : new Date()}
          mode={'date'}
          display={'default'}
          maximumDate={new Date()}
          onChange={(e: any, value: any) => {
            setDate(value);
            setIsDatePicker(false);
          }}
        />
      )}
    </View>
  );
};

export default AttachmentInput;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    marginBottom: 6,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: BORDER_INPUT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 3,
    columnGap: 8,
  },
  inputContainer: {
    // paddingHorizontal: 12,
    paddingLeft: 12,
    paddingVertical: 10,
  },
  fontStyle: {
    fontSize: 20,
    color: WHITE,
  },
});
