import {Dimensions, Platform} from 'react-native';

export const isIos = Platform.OS === 'ios';
export const edges = ['right', 'bottom', 'left'];
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
