import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import WavyBackground from 'react-native-wavy-background';

export default function App() {
  return (
    <View style={styles.container}>
      <WavyBackground
        frequency={1}
        amplitude={10}
        width={1500}
        height={400}
        offset={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
