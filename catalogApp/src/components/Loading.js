import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        color="#000"
        size="large"
        style={styles.loadingIndicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {height: 40, padding: 20},
  loadingIndicator: {alignSelf: 'center'},
});
