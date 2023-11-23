import {Dimensions} from 'react-native';
import transportCompany from '../assets/images/tc.png';
import transportUser from '../assets/images/tu.png';
import driver from '../assets/images/d.png';


export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;

export const ROLES = {
  transportUser: 'Transport User',
  transportCompany: 'Transport Company',
  driver: 'Driver',
};

export const RoleOptions = [
  {
    role: 'transportUser',
    field: 'Transport User',
    color: 'rgba(243,236,254,255)',
    image: transportUser,
    border:'#995de2'
  },
  {
    role: 'transportCompany',
    field: 'Transport Company',
    color: 'rgba(228,245,255,255)',
    image: transportCompany,
    border:'#2e678f'
  },
  {
    role: 'driver',
    field: 'Driver',
    color: 'rgba(255,249,237,255)',
    image: driver,
    border:'#f0aa51'
  },
];
