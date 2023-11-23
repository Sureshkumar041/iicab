import {Image, TouchableOpacity, View} from 'react-native';
import ProfileImage from '../../../assets/images/Profile.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BORDER_INPUT, DANGER, WHITE} from '../../../common/colors';

interface ImagePreviewProps {
  item: any;
  onClear?: any;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({item, onClear}) => {
  const handleClear = () => {
    if (onClear) onClear(null);
  };
  return (
    <View style={{marginVertical: 10}}>
      <View style={{position: 'relative', width: 100, height: 100}}>
        <Image
          source={{uri: item}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 3,
            borderWidth: 1,
            borderColor: BORDER_INPUT,
            objectFit:'contain'
          }}
        />
        <TouchableOpacity
          onPress={handleClear}
          style={{
            position: 'absolute',
            right: -8,
            top: -8,
            borderWidth: 1,
            borderColor: DANGER,
            borderRadius: 25,
            backgroundColor: WHITE,
          }}>
          <MaterialIcons name="close" style={{fontSize: 20, color: DANGER}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePreview;
