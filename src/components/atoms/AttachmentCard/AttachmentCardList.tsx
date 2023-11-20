import {useState} from 'react';
import {FlatList, View} from 'react-native';
import AttachmentCard from '.';
import IText from '../Text';

interface AttachmentListProps {
  item?: any;
}

const AttachmentList: React.FC<AttachmentListProps> = ({item}) => {
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
  return (
    <View>
      <FlatList
        data={data}
        style={{marginBottom: 8}}
        numColumns={2}
        keyExtractor={item => item?.color}
        renderItem={({item, index}) => (
          <View key={index} style={{width: '50%'}}>
            <AttachmentCard item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default AttachmentList;
