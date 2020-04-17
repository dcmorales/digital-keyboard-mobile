import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import Selections from './Selections/Selections';

export default function SettingsButton() {
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <View>
      <Overlay
        isVisible={overlayVisible}
        overlayBackgroundColor="rgba(255, 255, 255, .5)"
        overlayStyle={{ borderRadius: 20, height: 'auto' }}
        onBackdropPress={() => setOverlayVisible(false)}
      >
        <View style={styles.overlayView}>
          <Selections />

          <Button
            raised
            title="Close"
            buttonStyle={{ paddingHorizontal: 50 }}
            onPress={() => setOverlayVisible(!overlayVisible)}
          />
        </View>
      </Overlay>

      <Button
        icon={<FontAwesome name="gear" size={20} color="#fff" />}
        onPress={() => setOverlayVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlayView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
