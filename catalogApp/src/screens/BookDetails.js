import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

const BookDetails = () => {
  const {
    params: {bookDetails},
  } = useRoute();
  const {thumbnailUrl, longDescription} = bookDetails;
  return (
    <ScrollView style={styles.detailsContainer}>
      <View style={styles.image}>
        <Image style={styles.thumb} source={{uri: thumbnailUrl}} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.desc}>{longDescription}</Text>
      </View>
    </ScrollView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  detailsContainer: {backgroundColor: 'white'},
  image: {
    paddingTop: 8,
  },
  thumb: {
    height: 300,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  infoContainer: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  desc: {
    lineHeight: 20,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
});
