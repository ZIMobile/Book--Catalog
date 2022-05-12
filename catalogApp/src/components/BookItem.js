import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {
  LoadingImage,
  LoadingTitle,
  LoadingDesc,
} from './skeletonLoader/loaders';

export const BookItem = ({item = {}, isLoading = false}) => {
  const {navigate} = useNavigation();
  const {title, thumbnailUrl, shortDescription, isbn} = item;
  return (
    <View style={styles.bookItemContainer}>
      <TouchableOpacity
        key={isbn}
        onPress={() => {
          navigate('BookDetails', {
            bookDetails: item,
          });
        }}>
        <View style={styles.bookItem}>
          <View style={styles.imageContainer}>
            {isLoading ? (
              <View style={styles.alignCenter}>
                <LoadingImage />
              </View>
            ) : (
              <Image style={styles.thumb} source={{uri: thumbnailUrl}} />
            )}
          </View>
          <View style={styles.infoContainer}>
            {isLoading ? (
              <View style={styles.padButtom}>
                <LoadingTitle />
              </View>
            ) : (
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            )}
            {isLoading ? (
              <LoadingDesc />
            ) : (
              <Text numberOfLines={4} style={styles.desc}>
                {shortDescription}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bookItemContainer: {
    paddingBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ececec',
    borderRadius: 8,
    height: 120,
  },
  thumb: {
    resizeMode: 'contain',
    height: 100,
    borderRadius: 8,
  },
  imageContainer: {width: '25%', padding: 8},
  infoContainer: {
    justifyContent: 'flex-start',
    width: '70%',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  desc: {
    fontSize: 12,
    fontWeight: '400',
    color: '#787878',
  },
  alignCenter: {alignItems: 'center'},
  padButtom: {paddingBottom: 8},
});
