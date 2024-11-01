import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  backgroundColor?: string;
};

export const CustomButton = ({ 
  title, 
  onPress, 
  variant = 'primary',
  backgroundColor
}: CustomButtonProps) => {
  const buttonStyles: StyleProp<ViewStyle>[] = [
    styles.button,
    variant === 'secondary' ? styles.secondaryButton : styles.primaryButton,
    backgroundColor ? { backgroundColor } : undefined
  ].filter(Boolean);

  return (
    <TouchableOpacity 
      style={buttonStyles}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        variant === 'secondary' ? styles.secondaryButtonText : styles.primaryButtonText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: 'white',
  },
  secondaryButtonText: {
    color: Colors.primary,
  },
});