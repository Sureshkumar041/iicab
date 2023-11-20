import {StyleProp, TextStyle, TouchableOpacity, View} from 'react-native';
import {BLUE, WHITE} from '../../../common/colors';
import IText from '../Text';

interface IButtonProps {
  title?: any;
  onPress?: any;
  disabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  style?: any;
  iconButton?: boolean;
}

const IButton: React.FC<IButtonProps> = ({
  title,
  onPress,
  disabled,
  titleStyle,
  style,
  iconButton,
}) => {
  if (iconButton) {
    return <TouchableOpacity></TouchableOpacity>;
  }

  return (
    <TouchableOpacity
      style={[
        {
          // borderWidth: 1,
          marginTop: 4,
          marginBottom: 8,
          padding: 8,
          borderRadius: 3,
          backgroundColor: BLUE,
        },
        style,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <IText textStyle={[{textAlign: 'center', color: WHITE}, titleStyle]}>
        {title}
      </IText>
    </TouchableOpacity>
  );
};

export default IButton;
