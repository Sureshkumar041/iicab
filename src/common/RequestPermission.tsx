import { PermissionsAndroid } from 'react-native';

async function requestMultiplePermissions() {
  try {
    const permissions = [
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    ];

    // Request multiple permissions at once
    const granted = await PermissionsAndroid.requestMultiple(permissions);

    // Check if all permissions are granted
    const allPermissionsGranted = Object.values(granted).every(
      result => result === PermissionsAndroid.RESULTS.GRANTED
    );

    if (allPermissionsGranted) {
      console.log('All permissions granted!');
    } else {
      console.log('Some permissions are denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default requestMultiplePermissions;

