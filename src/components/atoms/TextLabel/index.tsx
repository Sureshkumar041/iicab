import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import IText from '../Text';

interface TextLabelProps {
  children: any;
  labelStyle?: StyleProp<TextStyle>;
  labelContainer?: StyleProp<ViewStyle>;
}

const TextLabel: React.FC<TextLabelProps> = ({
  children,
  labelStyle,
  labelContainer,
}) => {
  return (
    <View style={[labelContainer]}>
      <IText textType="bold" textStyle={[styles.labelStyle, labelStyle]}>
        {children}
      </IText>
    </View>
  );
};

export default TextLabel;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    marginBottom: 6,
  },
});
