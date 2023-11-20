import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import IText from '../../components/atoms/Text';
import IButton from '../../components/atoms/Button';

const LaunchScreen = () => {
  const naviagtion:any = useNavigation();
  return (
    <View
      style={{
        padding: 12,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        rowGap: 12,
      }}>
      <IText textType='bold'>Launch Search</IText>
      <View>
        <IButton
          title={'Click here'}
          onPress={() => {
            naviagtion.navigate('SignUp');
          }}
        />
      </View>
      <View>
        <IButton
          title={'Test Page'}
          onPress={() => {
            naviagtion.navigate('LoginScreen');
          }}
        />
      </View>
    </View>
  );
};

export default LaunchScreen;
