import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const CustomButton = ({
  title,
  onPress,
  disabled,
}: CustomButtonProps) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.buttonDisabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 24,
  },
  buttonDisabled: {
    backgroundColor: Colors.buttonDisabled,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: "600",
  },
});
