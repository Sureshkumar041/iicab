import {
  Image,
  PermissionsAndroid,
  Platform,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useState} from 'react';
import {
  BORDER_INPUT,
  DARKBLUE,
  PLACEHOLDER,
  WHITE,
} from '../../../common/colors';
import TextLabel from '../TextLabel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IText from '../Text';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import FullScreenCamera from '../FullScreenCamera';
import DocumentPicker from 'react-native-document-picker';
import UserImg from '../../../assets/icons/user.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type DocumentMimeType =
  | 'allFiles'
  | 'csv'
  | 'doc'
  | 'docx'
  | 'pdf'
  | 'plainText'
  | 'ppt'
  | 'pptx'
  | 'xls'
  | 'xlsx';
interface AttachmentInputProps {
  value?: any;
  onChange?: any;
  label?: any;
  editable?: boolean;
  placeholder?: TextInputProps['placeholder'];
  containerStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  multiSelector?: boolean;
  inputType?: 'date' | 'document' | 'photo' | 'logo';
  mimeType?: DocumentMimeType[];
  disabled?: boolean;
}

const AttachmentInput: React.FC<AttachmentInputProps> = ({
  value,
  onChange,
  label,
  editable,
  placeholder,
  containerStyle,
  iconName,
  multiSelector,
  inputType,
  mimeType,
  disabled,
}) => {
  const isAndroid13OrHigher =
    Platform.OS === 'android' && Platform.Version >= 33;
  // console.log('Os: ', Platform.OS);
  // console.log('Veer: ', Platform.Version);
  const [secureText, setSecureText] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isDatepicker, setIsDatePicker] = useState<any>(false);
  const [date, setDate] = useState<any>();
  const [openCamera, setOpenCamera] = useState<boolean>(false);

  const handleOnPress = () => {
    if (inputType === 'date') setIsDatePicker(true);
    if (inputType === 'photo') requestCameraPermission('CAMERA');
    if (inputType === 'document') requestCameraPermission('READ_MEDIA_IMAGES');
  };

  const [permissionStatus, setPermissionStatus] = useState<any>(null);

  const requestCameraPermission = async (permissionName: string) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS[permissionName],
        {
          title:
            permissionName === 'CAMERA'
              ? 'Camera Permission'
              : 'Media Permission',
          message: `${
            'This app needs access to your ' + permissionName === 'CAMERA'
              ? 'camera.'
              : 'mdeia.'
          }`,
          buttonPositive: 'OK',
        },
      );
      // uploadDocument();
      console.log('Permission res: ', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionStatus('GRANTED');
        if (inputType === 'photo') pickImage();
        if (inputType === 'document') uploadDocument();
      } else {
        setPermissionStatus('DENIED');
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
      setPermissionStatus('ERROR');
    }
  };

  const uploadDocument = async () => {
    try {
      const option = {};
      const document = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: false,
        transitionStyle: 'crossDissolve',
      });
      onChange(document);
    } catch (error: any) {
      console.log('Err upload dc : ', error?.message);
    }
  };

  const pickImage = async () => {
    setOpenCamera(true);
  };

  return (
    <>
      {inputType === 'date' && (
        <View style={[{marginBottom: 12}, containerStyle]}>
          {label && <TextLabel>{label}</TextLabel>}
          <TouchableOpacity
            style={[styles.textContainer]}
            disabled={value ? true : false}
            onPress={() => handleOnPress()}>
            <View style={[styles.inputContainer]}>
              {inputType === 'date' && date ? (
                <IText textStyle={{fontSize: 14}}>
                  {moment(date?.toString())
                    ?.format('DD-MMM-YYYY')
                    ?.toUpperCase()}
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
                disabled={value ? true : false}
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
                {inputType === 'date' && (
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
      )}

      {(inputType === 'photo' || inputType === 'logo') && (
        <View style={[styles.flexRowCen, {marginVertical: 8, rowGap: 4}]}>
          <View
            style={[
              styles.flexRowCen,
              {
                borderRadius: 60,
                width: 120,
                height: 120,
                backgroundColor: BORDER_INPUT,
                borderWidth: 1,
                borderColor: BORDER_INPUT,
              },
            ]}>
            {inputType === 'photo' && !value && (
              <MaterialCommunityIcons
                name="account"
                style={{fontSize: 100, color: WHITE}}
              />
            )}
            {((inputType === 'photo' && value) ||
              (inputType === 'logo' && value)) && (
              <Image
                source={value ? {uri: value} : UserImg}
                style={[
                  {
                    width: value ? '100%' : 70,
                    height: value ? '100%' : 70,
                    borderRadius: value ? 60 : 0,
                    objectFit: 'contain',
                  },
                  !value && {tintColor: WHITE},
                ]}
              />
            )}
            {inputType === 'logo' && !value && (
              <FontAwesome name="photo" style={{fontSize: 50}} />
            )}

            <TouchableOpacity
              onPress={() => handleOnPress()}
              style={{
                position: 'absolute',
                bottom: 6,
                right: -3,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 25,
                padding: 6,
              }}>
              <MaterialCommunityIcons
                name="camera-plus-outline"
                style={{fontSize: 24, transform: [{scaleX: -1}], color: WHITE}}
              />
            </TouchableOpacity>
          </View>
          <TextLabel>
            {inputType === 'logo' && 'Logo'}
            {inputType === 'photo' && 'Photo'}{' '}
          </TextLabel>
        </View>
      )}

      {inputType === 'document' && (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => handleOnPress()}
          style={[
            styles.documentPlaceholder,
            {
              opacity: disabled ? 0.4 : 1,
            },
          ]}>
          <View>
            <Image
              source={require('../../../assets/images/uploadPlaceholder.png')}
              style={{width: 150, height: 130, objectFit: 'contain'}}
            />
          </View>
          <View>
            <IText>{placeholder} </IText>
          </View>
        </TouchableOpacity>
      )}

      <FullScreenCamera
        openCamera={openCamera}
        setOpenCamera={setOpenCamera}
        setImage={onChange}
      />
    </>
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
    paddingLeft: 12,
    paddingVertical: 10,
  },
  fontStyle: {
    fontSize: 20,
    color: WHITE,
  },
  flexRowCen: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentPlaceholder: {
    height: 160,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: BORDER_INPUT,
    borderRadius: 3,
    padding: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
