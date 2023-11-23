import {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import AttachmentCard from '.';
import IButton from '../Button';
import IText from '../Text';

interface AttachmentListProps {
  uploadedList: any;
  onClear: any;
}

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
  {id: '7', title: 'Item 7'},
  {id: '8', title: 'Item 8'},
  {id: '15', title: 'Item 15'},
  {id: '61', title: 'Item 16'},
  {id: '17', title: 'Item 17'},
  {id: '81', title: 'Item 18'},
  // Add more items as needed
];

const ITEMS_PER_ROW = 4; // Number of items per row
const TOTAL_ROWS = 2; // Total number of rows

const AttachmentList: React.FC<AttachmentListProps> = ({
  uploadedList,
  onClear,
}) => {
  const [data, setData] = useState<any>([
    {
      color: 'File name',
      value: '#f00',
    },
    {
      color: 'File name',
      value: '#0f0',
    },
    {
      color: 'File name here',
      value: '#00f',
    },
    // {
    //   color: 'cyan',
    //   value: '#0ff',
    // },
    // {
    //   color: 'magenta',
    //   value: '#f0f',
    // },
    // {
    //   color: 'yellow',
    //   value: '#ff0',
    // },
    // {
    //   color: 'black',
    //   value: '#000',
    // },
  ]);

  const [viewMore, setView] = useState<boolean>(false),
    [page, setPage] = useState<number>(),
    [limit, setLimit] = useState<number>(2),
    [newData, setNewData] = useState<any>(
      uploadedList?.slice(
        0,
        uploadedList?.length > 2 ? 1 : uploadedList?.length,
      ),
    ),
    [totalPage, setTotalPage] = useState<number>(
      Math.ceil(uploadedList?.length / 2),
    );

  const handleClear = (clearIndex: any) => {
    const newData = uploadedList?.filter(
      (item: any, i: number) => i !== clearIndex,
    );
    onClear(newData);
  };

  const renderRow = ({item}: any) => {
    return (
      <View style={styles.row}>
        {item.map((data: any) => (
          <View key={data.id} style={styles.item}>
            <IText>{data.title}</IText>
          </View>
        ))}
      </View>
    );
  };

  const formatData = (data: any) => {
    const result = [];
    let index = 0;
    while (index < data.length) {
      result.push(data.slice(index, index + ITEMS_PER_ROW));
      index += ITEMS_PER_ROW;
    }
    return result;
  };

  const handleViewMore = () => {};

  return (
    <View>
      <FlatList
        data={uploadedList}
        // horizontal
        // contentContainerStyle={{flexDirection: 'column', flexWrap: 'wrap'}}
        // numColumns={Math.ceil(uploadedList?.length / 2)}
        style={{marginBottom: uploadedList?.length > 0 ? 8 : 0}}
        numColumns={2}
        // showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.doc?.uri}
        renderItem={({item, index}) => (
          <View key={index} style={{width: '50%'}}>
            <AttachmentCard
              // viewMore={uploadedList?.length > 2 ? true : false}
              item={item}
              onClear={() => handleClear(index)}
            />
          </View>
        )}
      />
      {/* <View>
        <IButton title={'View more'} />
      </View> */}
    </View>
    // <FlatList
    //   data={formatData(DATA)}
    //   renderItem={renderRow}
    //   keyExtractor={(item, index) => `row_${index}`}
    //   horizontal
    //   showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
    // />
  );
};

export default AttachmentList;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    height: 80,
  },
});
