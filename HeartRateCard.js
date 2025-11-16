import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heart } from 'lucide-react-native';

const HeartRateCard = ({ heartRate }) => {
  return (
    <View style={styles.card}>
      <Heart size={32} color="#EF4444" />
      <Text style={styles.value}>{heartRate}</Text>
      <Text style={styles.unit}>bpm</Text>
    </View>
  );
};

export default HeartRateCard;