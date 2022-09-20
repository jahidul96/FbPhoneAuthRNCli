import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const addUserInfotoFb = (id, info) => {
  firestore()
    .collection('Users')
    .doc(id)
    .set(info)
    .then(() => {
      Alert.alert('User added!');
    });
};
