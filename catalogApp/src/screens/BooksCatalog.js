import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import BookList from 'components/BookList';
import SearchHeader from 'components/SearchBar';

const BooksCatalog = () => {
  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={[styles.safeContainer]}>
      <SearchHeader />
      <BookList />
    </SafeAreaView>
  );
};

export default BooksCatalog;

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
});
