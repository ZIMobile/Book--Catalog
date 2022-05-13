import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import * as AT from '../store/action-types';
import {isIos} from '../constants/Layout';
import Strings from '../constants/Strings';

const SearchHeader = () => {
  const dispatch = useDispatch();
  const {searchValue} = useSelector(state => state?.catalog);

  const searchFilterFunction = text => {
    dispatch({
      type: AT.SET_SEARCH_VALUE,
      payload: text,
    });
  };

  return (
    <SearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      placeholder={Strings.typeHere}
      lightTheme
      round
      onChangeText={text => searchFilterFunction(text)}
      autoCorrect={false}
      value={searchValue}
      platform={isIos ? 'ios' : 'android'}
    />
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'red',
  },
  inputContainer: {
    backgroundColor: '#ececec',
  },
});
