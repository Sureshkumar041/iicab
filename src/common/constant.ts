import {Dimensions} from 'react-native';

export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;

export const ROLES = {
  transportUser: 'Transport User',
  transportCompany: 'Transport Company',
  driver: 'Driver',
};

export const RoleOptions = [
  {role: 'transportUser', field: 'Transport User'},
  {role: 'transportCompany', field: 'Transport Company'},
  {role: 'Driver', field: 'Driver'},
];
