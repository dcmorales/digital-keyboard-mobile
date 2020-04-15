import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import PlaySettings from './PlaySettings';

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const { modalView, closeButton } = styles;

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalView}>
          <PlaySettings />

          <Button
            raised
            title="Close"
            buttonStyle={closeButton}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>

      <Button
        icon={<FontAwesome name="gear" size={20} color="#fff" />}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  closeButton: {
    backgroundColor: '#0059b2',
    borderColor: '#3399ff',
    borderWidth: 2.5,
    paddingHorizontal: 50,
  },
});
