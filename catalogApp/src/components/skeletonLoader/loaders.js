import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';

// Animation speed in seconds.
const ANIMATION_SPEED = 1.2;

const Bone = ({children}) => {
  return (
    <ContentLoader
      animate
      speed={ANIMATION_SPEED}
      backgroundColor={'#CACCCE'}
      foregroundColor={'#DADCDE'}>
      {children}
    </ContentLoader>
  );
};

export const LoadingImage = () => (
  <View style={styles.image}>
    <Bone>
      <Rect rx={8} width={70} height={75} />
    </Bone>
  </View>
);

export const LoadingTitle = () => (
  <View style={styles.title}>
    <Bone>
      <Rect rx={8} width={270} height={20} />
    </Bone>
  </View>
);

export const LoadingDesc = () => (
  <View style={styles.desc}>
    <Bone>
      <Rect rx={8} width={270} height={45} />
    </Bone>
  </View>
);

const styles = StyleSheet.create({
  image: {
    height: 75,
    width: 70,
  },
  title: {
    height: 20,
    width: 270,
    // paddingBottom: 10,
  },
  desc: {
    height: 45,
    width: 270,
  },
});
