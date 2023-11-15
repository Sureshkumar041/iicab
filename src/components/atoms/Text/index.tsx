import {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

interface ITextProps {
  children: ReactNode;
  onPress?: any;
  textType?: 'regular' | 'bold' | 'light';
  textStyle?: StyleProp<TextStyle>;
}

const IText: React.FC<ITextProps> = ({
  children,
  onPress,
  textType,
  textStyle,
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
    default:
      fontStyle = styles.regular;
      break;
  }

  return (
    <View>
      <Text style={[styles.textStyle, textStyle, fontStyle]}> {children} </Text>
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
  },
  regular: {
    fontFamily: 'Lato-Regular',
  },
  bold: {
    fontFamily: 'Lato-Bold',
  },
  light: {
    fontFamily: 'Lato-Light',
  },
});
