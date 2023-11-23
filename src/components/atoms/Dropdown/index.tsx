import {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IText from '../Text';
import ITextInput from '../TextInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  BLUE,
  BORDER_INPUT,
  GREY,
  LIGHTBLUE,
  PLACEHOLDER,
} from '../../../common/colors';
import TextLabel from '../TextLabel';
import {SearchBar} from 'react-native-screens';
import SearchInput from '../TextInput/SearchTextInput';
import CheckBox from '../CheckBox';
import SelectDropdown from './SelectDropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface DropdownProps {
  value?: any;
  itemList?: any;
  placeholder?: any;
  onSelect: (item: any) => void;
  label?: any;
  multiSelector?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  itemList,
  placeholder,
  onSelect,
  label,
  multiSelector,
}) => {
  const [selectedValue, setSelectedValue] = useState<any>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (item?: any) => {
    // setSelectedValue(item);
    onSelect(item);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <View style={{marginBottom: 12}}>
      {label && <TextLabel>{label}</TextLabel>}
      <View style={[styles.container]}>
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          style={[styles.inputContainer]}>
          {value?.length === 0 ? (
            <IText textStyle={{color: PLACEHOLDER, fontSize: 13}}>
              {placeholder}{' '}
            </IText>
          ) : value?.length <= 2 ? (
            <IText>
              {value?.map((item: any, i: number) =>
                value?.length > i + 1 ? (item?.value ?? item?.field) + ', ' : item?.value ?? item?.field,
              )}
            </IText>
          ) : (
            <IText>{value?.length} item selected </IText>
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 4,
            paddingRight: 6,
          }}>
          {selectedValue?.value && (
            <TouchableOpacity onPress={() => setSelectedValue(null)}>
              <MaterialIcons name="close" style={{fontSize: 20, color: BLUE}} />
            </TouchableOpacity>
          )}
          {isOpen ? (
            <Ionicons
              onPress={() => setIsOpen(!isOpen)}
              name="caret-up-outline"
              style={{fontSize: 20, color: '#999'}}
            />
          ) : (
            <Ionicons
              onPress={() => setIsOpen(!isOpen)}
              name="caret-down-outline"
              style={{fontSize: 20, color: '#999'}}
            />
          )}
        </View>
      </View>
      <SelectDropdown
        isVisible={isOpen}
        onClose={() => handleClose()}
        onSelect={handleSelect}
        options={itemList}
        value={value}
        multiSelector={multiSelector}
        label={label}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: BORDER_INPUT,
    borderRadius: 3,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});
