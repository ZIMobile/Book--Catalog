import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as AT from 'store/action-types';
import {fetchBooks} from 'api/fetchBooks';

import {Loading} from './Loading';
import {BookItem} from './BookItem';
import {useDebouncedEffect} from 'hooks/useDebounceEffect';

const ITEM_HEIGHT = 136;

const BookList = () => {
  const dispatch = useDispatch();
  const {books, isLoadingMore, searchValue, isLoading, error} = useSelector(
    state => state.catalog,
  );
  const onEndReachedCalled = useRef(false);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [page, setPage] = useState(1);

  const fetchMoreBooks = () => {
    if (!onEndReachedCalled.current) {
      dispatch({type: AT.FETCHING_MORE_BOOKS});
      dispatch(fetchBooks(page + 1, 10, searchValue));
      setPage(p => p + 1);
      onEndReachedCalled.current = true;
    }
  };

  const fetchFilteredBooks = () => {
    setPage(1);
    dispatch({type: AT.FETCHING_BOOKS});
    dispatch(fetchBooks(1, 10, searchValue, true));
  };

  useEffect(() => {
    dispatch({type: AT.FETCHING_BOOKS});
    dispatch(fetchBooks(1, 10, '', true));
  }, [dispatch]);

  useDebouncedEffect(() => fetchFilteredBooks(), 500, [searchValue]);

  if (isLoading) {
    return (
      <View style={styles.listContainer}>
        {[...Array(10)].map((_, i) => {
          return <BookItem key={i} isLoading />;
        })}
      </View>
    );
  }

  if (error) {
    return (
      <Text testID="error-message" style={styles.textMsg}>
        {error.message}
      </Text>
    );
  }

  if (books?.length === 0) {
    return (
      <Text style={styles.textMsg} testID="no-results">
        No books found
      </Text>
    );
  }

  return (
    <Animated.FlatList
      testID="book-list"
      data={books}
      contentContainerStyle={styles.listContainer}
      renderItem={({item, index}) => {
        const inputRange = [
          -1,
          0,
          ITEM_HEIGHT * index,
          ITEM_HEIGHT * (index + 2),
        ];
        const opacityInputRange = [
          -1,
          0,
          ITEM_HEIGHT * index,
          ITEM_HEIGHT * (index + 0.8),
        ];
        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0],
        });
        const opacity = scrollY.interpolate({
          inputRange: opacityInputRange,
          outputRange: [1, 1, 1, 0],
        });
        return (
          <Animated.View
            testID={`book-item-${index}`}
            style={{transform: [{scale}], opacity}}>
            <BookItem item={item} />
          </Animated.View>
        );
      }}
      initialNumToRender={10}
      keyExtractor={item => {
        return item.isbn;
      }}
      ListFooterComponent={isLoadingMore && <Loading />}
      onEndReachedThreshold={0.9}
      onMomentumScrollBegin={() => {
        onEndReachedCalled.current = false;
      }}
      onEndReached={fetchMoreBooks}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
    />
  );
};

export default BookList;

const styles = StyleSheet.create({
  listContainer: {padding: 16},
  textMsg: {padding: 8, fontSize: 36, fontWeight: 'bold'},
});
