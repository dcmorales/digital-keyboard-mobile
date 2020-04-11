import React, { Component, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Header from './Header';
const PlaySettings = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <Header />

          <TouchableHighlight
            style={{ backgroundColor: '#2196F3' }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text>Close</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <FontAwesome name="gear" size={20} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
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
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default PlaySettings;
