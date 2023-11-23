import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BORDER_INPUT} from '../../../common/colors';
import {height, width} from '../../../common/constant';
import IText from '../Text';
import SearchInput from '../TextInput/SearchTextInput';
import CheckBox from '../CheckBox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextLabel from '../TextLabel';
import CustomHeader from '../CustomHeader';

interface SelectDropdownProps {
  value?: any;
  isVisible?: boolean;
  onClose?: any;
  options: any;
  onSelect: any;
  multiSelector?: boolean;
  label: any;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  value,
  isVisible,
  onClose,
  options,
  onSelect,
  multiSelector,
  label,
}) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<any>(null);
  const [data, setData] = useState<any>(options);
  const [selectedData, setSelectedData] = useState<any>(value);

  const handleSearch = () => {
    // Filter data based on the search query
    const filteredData = options?.filter((item: any) =>
      item?.field?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
    );
    // Update the filtered data to be displayed
    setData(filteredData);
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    } else if (searchQuery === '') setData(options);
  }, [searchQuery]);

  const handleMultiSelector = (
    selectionType: 'all' | 'single',
    selectData?: any,
  ) => {
    // handle data if  multi selector
    if (multiSelector) {
      if (selectionType === 'all') {
        if (selectData) setSelectedData(options);
        else setSelectedData([]);
        setSelectAll(selectData);
        return true;
      }
      let newData = [];
      const existData = selectedData?.filter(
        (item: any) => item?.value === selectData?.value,
      );
      if (existData?.length > 0) {
        newData = selectedData?.filter(
          (item: any) => item?.value !== selectData?.value,
        );
      } else {
        newData = [...selectedData, selectData];
      }
      setSelectedData(newData);
      if (newData?.length === options?.length) setSelectAll(true);
      else setSelectAll(false);
    } else {
      // handle data if not multi selector
      setData(options);
      setSearchQuery(null);
      setSelectedData([selectData]);
      onSelect([selectData]);
    }
  };

  const handleClose = () => {
    setData(options);
    setSearchQuery(null);
    onSelect(selectedData);
    onClose();
  };

  return (
    <Modal transparent={true} visible={isVisible} onDismiss={onClose}>
      <View
        style={{
          backgroundColor: '#fff',
          height: '100%',
          width: '100%',
        }}>
        <CustomHeader title={label} closeBtn onClose={handleClose} />
        <View
          style={{
            paddingVertical: 12,
            paddingHorizontal: 8,
            borderBottomWidth: 1,
            borderColor: BORDER_INPUT,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {multiSelector && (
            <CheckBox
              position="left"
              value={selectAll}
              onChange={(e: boolean) => handleMultiSelector('all', e)}
            />
          )}
          <View style={{flex: 1}}>
            <SearchInput
              value={searchQuery}
              onChangeText={(e: any) => {
                setSearchQuery(searchQuery ? e : e?.trim());
              }}
            />
          </View>
          {/* <TouchableOpacity onPress={onClose}>
            <MaterialIcons
              name="close"
              style={{fontSize: 20, paddingLeft: 8}}
            />
          </TouchableOpacity> */}
        </View>
        <ScrollView>
          {data?.map((item: any, index: number) => (
            <TouchableOpacity
              onPress={() => handleMultiSelector('single', item)}
              style={{
                backgroundColor: multiSelector
                  ? 'transparent'
                  : selectedData?.filter(
                      (val: any) =>
                        (val?.value || val?.role) ===
                        (item?.value || item?.role),
                    )?.length > 0
                  ? '#d6dae5'
                  : 'transparent',
                paddingHorizontal: 8,
                paddingVertical: 12,
                borderBottomWidth: 0.2,
                borderBottomColor: BORDER_INPUT,
              }}
              key={index}>
              {multiSelector ? (
                <CheckBox
                  value={
                    selectedData?.filter(
                      (val: any) =>
                        (val?.value || val?.role) ===
                        (item?.value || item?.role),
                    )?.length > 0
                      ? true
                      : false
                  }
                  onChange={(e: boolean) => handleMultiSelector('single', item)}
                  label={item?.field}
                  position="left"
                />
              ) : (
                <TextLabel labelStyle={{marginBottom: 0}}>
                  {item?.field}
                </TextLabel>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({});
