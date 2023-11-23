import React, {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid} from 'react-native';

interface PermissionCheckerProps {
  permissionList?: any | undefined;
}

const PermissionChecker = () => {
  useEffect(() => {
    console.log('Permission');
    askPermission();
  }, []);

  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);
  const [permissionStatus, setPermissionStatus] = useState<any>(true);

  useEffect(() => {
    // checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted) {
        setPermissionStatus('GRANTED');
      } else {
        setPermissionStatus('DENIED');
      }
    } catch (error) {
      console.error('Error checking camera permission:', error);
      setPermissionStatus('ERROR');
    }
  };

  const askPermission = async () => {
    try {
      const permission = [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ];
      const result = await PermissionsAndroid.requestMultiple(permission);
      const allPermissionsGranted = Object.values(result).every(
        permission => permission === PermissionsAndroid.RESULTS.GRANTED,
      );
      if (allPermissionsGranted) {
        setPermissionStatus(true);
        console.log('All permissions granted');
      } else {
        setPermissionStatus(false);
        // showAlert(true);
        console.log('Permissions denied: ', allPermissionsGranted);
      }
    } catch (error: any) {
      console.log('err: ', error?.message);
    }
  };

  const showAlert = (sts?: boolean) => {
    if (true && sts) {
      Alert.alert('Required Permission', 'Message', [
        {
          text: 'Ok',
          onPress: () => {
            askPermission();
          },
        },
        {
          text: 'Exit',
          onPress: () => {
            console.log('Exit');
          },
        },
      ]);
    }
  };

  return null;
};

export default PermissionChecker;
