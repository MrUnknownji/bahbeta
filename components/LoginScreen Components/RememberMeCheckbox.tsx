import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

interface RememberMeCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  onForgotPassword: () => void;
}

export const RememberMeCheckbox = ({
  checked,
  onToggle,
  onForgotPassword,
}: RememberMeCheckboxProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={onToggle}>
        <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
          {checked && <Ionicons name="checkmark" size={14} color="white" />}
        </View>
        <Text style={styles.checkboxLabel}>Remember Me</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onForgotPassword}>
        <Text style={styles.forgotPassword}>Forget Your Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.border,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: Colors.checkboxActive,
    borderColor: Colors.checkboxActive,
  },
  checkboxLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  forgotPassword: {
    fontSize: 14,
    color: Colors.primary,
  },
});
