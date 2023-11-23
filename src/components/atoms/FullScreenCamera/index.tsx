import React, {useEffect, useRef, useState} from 'react';
import {
  BackHandler,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import IText from '../Text';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import RNFS from 'react-native-fs';
import {Modal} from 'react-native';
import {height} from '../../../common/constant';
import {useNavigation} from '@react-navigation/native';
import IButton from '../Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface FullScreenCameraProps {
  openCamera: boolean;
  setOpenCamera: any;
  selectMultiple?: boolean;
  setImage: any;
}

const FullScreenCamera: React.FC<FullScreenCameraProps> = ({
  openCamera,
  setOpenCamera,
  selectMultiple,
  setImage,
}) => {
  const navigation = useNavigation();
  const device = useCameraDevice('back'),
    frontCamera: any = useCameraDevice('front');
  const [camera, setCamera] = useState<Camera | null | any>(null);
  const cameraRef = useRef<Camera | any>(null);
  const [isFocus, setsFocus] = useState<boolean>(false),
    [isBackCamera, setIsBackCamera] = useState<boolean>(true);

  const handleClose = () => {
    setOpenCamera(false);
  };

  const handleFocus = async () => {
    try {
      // await cameraRef.current.focus({ x: 50, y:40})
      // Set lens position to a desired value (0 is minimum, 1 is maximum)
      // await cameraRef.current.setLensPosition(0.5);
      // For example, setting to the middle position
      console.log('Camera focused successfully');
    } catch (error) {
      console.error('Error focusing camera:', error);
    }
  };

  // Capture Image From Camera
  const captureImage = async () => {
    const photo = await cameraRef.current.takePhoto({
      qualityPrioritization: 'speed',
      flash: 'off',
      enableShutterSound: false,
    });
    console.log('photo: ', photo);
    ImgToBase64(photo);
  };

  // Capture Image From Gallery
  const pickImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: selectMultiple ? 5 : 1, // Select a single image
    };
    launchImageLibrary(options, async (response: any) => {
      console.log('ImagePicker Response:', response);
      if (response?.didCancel) {
        console.log('User cancelled image picker');
      } else if (response?.error) {
        console.log('ImagePicker Error:', response.error);
      } else if (response?.assets?.length > 0) {
        // Handle the selected image
        console.log('Gallery: ', response?.assets);
        await ImgToBase64(response?.assets?.[0]);
      }
    });
  };

  const ImgToBase64 = async (photo: any) => {
    const imagePath = photo?.path || photo?.uri;
    const base64 = await RNFS.readFile(imagePath, 'base64')
      .then(base64String => {
        setImage(`data:image/jpeg;base64,${base64String}`);
        setOpenCamera(false);
      })
      .catch(err => console.log('Err img: ', err?.message));
  };

  if (!device) {
    return (
      <View style={{backgroundColor: 'red'}}>
        <IText>Loading</IText>
      </View>
    );
  }

  // Here close the camera ...
  const backAction = () => {
    setOpenCamera(false);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Modal
      visible={openCamera}
      onRequestClose={backAction}
      transparent
      style={{width: '100%', height: height}}>
      <View>
        {device && device !== null && (
          <Camera
            // focusable
            isActive={true}
            photo={true}
            device={isBackCamera ? device : frontCamera}
            style={{width: '100%', height: '100%'}}
            ref={cameraRef}
          />
        )}
        <View
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}>
          <View
            style={{
              paddingVertical: 12,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                pickImage();
              }}>
              <FontAwesome style={styles.iconStyle} name="photo" />
            </TouchableOpacity>

            <Pressable
              style={{
                width: 70,
                height: 70,
                padding: 6,
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 50,
              }}>
              <TouchableOpacity
                onPress={() => captureImage()}
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: '100%',
                  borderRadius: 50,
                }}></TouchableOpacity>
            </Pressable>

            <TouchableOpacity onPress={() => setIsBackCamera(!isBackCamera)}>
              <MaterialIcons
                name="flip-camera-android"
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FullScreenCamera;

const styles = StyleSheet.create({
  iconStyle: {
    color: 'white',
    fontSize: 24,
  },
});
