import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export function Button({onPress, icon = 'settings-power'}) {
  return (
    <Pressable onPress={onPress} style={styles.pressContainer}>
      <Icon name={icon} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressContainer: {
    width: 40,
    height: 20,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
