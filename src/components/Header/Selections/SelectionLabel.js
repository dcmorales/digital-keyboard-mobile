import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

export default function SelectionLabel({ label, info }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.labelText}>{label}</Text>
      <Tooltip
        height={200}
        width={250}
        popover={
          <FlatList
            data={info}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={item => item}
          />
        }
      >
        <FontAwesome name="info" size={15} color="#2196F3" />
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  labelText: {
    borderLeftWidth: 1,
    paddingHorizontal: 7,
    borderColor: '#2196F3',
    color: '#0059b2',
    fontWeight: '700',
  },
});
