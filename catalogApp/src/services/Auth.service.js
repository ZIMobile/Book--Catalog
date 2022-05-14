import auth from '@react-native-firebase/auth';
import * as AT from '../store/action-types';

const login = async (email, password) => {
  return async dispatch => {
    try {
      dispatch({type: AT.SET_IS_LOGGED_IN_LOADING, payload: {isLoading: true}});
      await auth().signInWithEmailAndPassword(email, password);
      dispatch({type: AT.SET_IS_LOGGED_IN, payload: {isLoggedIn: true}});
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        dispatch({
          type: AT.SET_IS_LOGGED_IN_LOADING,
          payload: {isLoading: false},
        });
      }, 500);
    }
  };
};

const logOut = () => {
  return async dispatch => {
    auth()
      .signOut()
      .then(() => {
        dispatch({
          type: AT.SET_IS_LOGGED_IN,
          payload: {isLoggedIn: false},
        });
      });
  };
};

export default {
  login,
  logOut,
};
