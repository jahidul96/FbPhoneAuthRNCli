import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const AddUserToFb = (email, password) => {
  return new Promise(async (resolve, reject) => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        resolve(user);
        Alert.alert('User Created Succesfully!.');
      })
      .catch(err => {
        reject(err);
        Alert.alert('Something went wrong');
      });
  });
};
