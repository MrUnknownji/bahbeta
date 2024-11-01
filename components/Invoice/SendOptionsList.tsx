import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import Colors from '@/constants/Colors';

type SendOptionsListProps = {
  options: Array<{
    id: string;
    label: string;
    selected: boolean;
  }>;
  onToggle: (id: string) => void;
};

export const SendOptionsList = ({ options, onToggle }: SendOptionsListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Invoice Via:</Text>
      <View style={styles.optionsContainer}>

      {options.map((option) => (
        <View key={option.id} style={styles.optionRow}>
          <Checkbox
            value={option.selected}
            onValueChange={() => onToggle(option.id)}
            color={option.selected ? Colors.primary : undefined}
            />
          <Text style={styles.optionText}>{option.label}</Text>
        </View>
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 8,
  },
  optionText: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight:'bold',
  },
});