import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IText from '../Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLUE, BORDER_INPUT} from '../../../common/colors';
import Feather from 'react-native-vector-icons/Feather';

interface AttachmentCardProps {
  item?: any;
}

const AttachmentCard: React.FC<AttachmentCardProps> = ({item}) => {
  return (
    <View style={{marginHorizontal: 2, marginVertical: 8}}>
      <View
        style={{
          elevation: 4,
          padding: 12,
          backgroundColor: '#fff',
          marginHorizontal: 1,
          borderRadius: 3,
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 4,
        }}>
        <View>
          <Feather name="file-text" style={{color: BLUE, fontSize: 20}} />
        </View>
        <View style={{flex: 1}}>
          <IText numberOfLines={1} textStyle={{textTransform: 'capitalize'}}>
            {item?.color}
          </IText>
        </View>
        <TouchableOpacity>
          <MaterialIcons
            name="close"
            style={{fontSize: 24, color: BORDER_INPUT}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AttachmentCard;
