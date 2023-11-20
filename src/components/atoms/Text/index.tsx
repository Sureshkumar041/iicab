import {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';

interface ITextProps {
  children: ReactNode;
  onPress?: any;
  textType?: 'regular' | 'bold' | 'light' | 'medium';
  textStyle?: StyleProp<TextStyle>;
  numberOfLines?: TextProps['numberOfLines'];
}

const IText: React.FC<ITextProps> = ({
  children,
  onPress,
  textType,
  textStyle,
  numberOfLines,
}) => {
  let fontStyle: {};
  switch (textType) {
    case 'regular':
      fontStyle = styles.regular;
      break;
    case 'bold':
      fontStyle = styles.bold;
      break;
    case 'light':
      fontStyle = styles.light;
      break;
    case 'medium':
      fontStyle = styles.medium;
      break;
    default:
      fontStyle = styles.regular;
      break;
  }

  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.textStyle, textStyle, fontStyle]}>
        {children}
      </Text>
    </View>
  );
};

export default IText;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    lineHeight: 18,
    fontFamily: '',
  },
  regular: {
    // fontFamily: 'Lato-Regular',
    fontFamily: 'RobotoCondensed-Regular',
    // fontFamily:'RobotoCondensed-Bold'
  },
  bold: {
    // fontFamily: 'Lato-Bold',
    fontFamily: 'RobotoCondensed-Bold',
  },
  light: {
    // fontFamily: 'Lato-Light',
    fontFamily: 'RobotoCondensed-Light',
  },
  medium: {
    fontFamily: 'RobotoCondensed-Medium',
  },
});
