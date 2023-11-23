import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IText from '../Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLUE, BORDER_INPUT} from '../../../common/colors';
import Feather from 'react-native-vector-icons/Feather';
import IButton from '../Button';

interface AttachmentCardProps {
  item: any;
  onClear: any;
  viewMore?: boolean;
  viewLess?: boolean;
  onPress?: any;
}

const AttachmentCard: React.FC<AttachmentCardProps> = ({
  item,
  onClear,
  viewLess,
  viewMore,
  onPress,
}) => {
  return (
    <View
      style={{
        marginHorizontal: 2,
        marginVertical: 3,
        flexDirection: 'row',
        columnGap: 14,
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            elevation: 4,
            padding: 12,
            backgroundColor: '#fff',
            marginHorizontal: 1,
            borderRadius: 3,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 6,
          }}>
          <View>
            <Feather name="file-text" style={{color: BLUE, fontSize: 20}} />
          </View>
          <View style={{flex: 1}}>
            <IText numberOfLines={1} textStyle={styles.fileName}>
              {item?.doc?.name}
            </IText>
          </View>
          <TouchableOpacity onPress={() => onClear()}>
            <MaterialIcons
              name="close"
              style={{fontSize: 24, color: BORDER_INPUT}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingVertical: 7}}>
          <IText numberOfLines={1}>{item?.description}</IText>
        </View>
      </View>
      {false && (
        <View style={{flex: 1}}>
          <IButton title={'View more'} />
        </View>
      )}
    </View>
  );
};

export default AttachmentCard;

const styles = StyleSheet.create({
  fileName: {
    textTransform: 'capitalize',
    fontSize: 13,
  },
});
