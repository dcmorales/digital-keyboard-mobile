import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

export default function SelectionLabel({ label, info, height }) {
  const { labelText, infoText } = styles;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={labelText}>{label}</Text>
      <Tooltip
        height={height ? height : 40}
        width={250}
        backgroundColor="#004a8d"
        popover={
          <FlatList
            data={info}
            renderItem={({ item }) => <Text style={infoText}>{item}</Text>}
            keyExtractor={item => item}
          />
        }
      >
        <FontAwesome name="info" size={16} color="#2196F3" />
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
  infoText: {
    color: '#fff',
    paddingTop: 3,
  },
});
