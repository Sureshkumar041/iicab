import {StyleSheet, View} from 'react-native';

interface RadioButtonProps {
  value?: boolean;
  isSelected?: boolean;
  onChange?: any;
}

const RadioButton: React.FC<RadioButtonProps> = ({value}) => {
  return <View style={{width:10}}></View>;
};

export default RadioButton;

const styles = StyleSheet.create({});
