import {StyleSheet, View} from 'react-native';
import IText from '../Text';

interface TextLabelProps {
  children: any;
}

const TextLabel: React.FC<TextLabelProps> = ({children}) => {
  return (
    <View>
      <IText textType="bold" textStyle={styles.labelStyle}>
        {children}
      </IText>
    </View>
  );
};

export default TextLabel;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    marginBottom: 6,
  },
});
