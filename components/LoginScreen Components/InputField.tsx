import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

interface InputFieldProps {
  icon?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  label?: string;
  iconLibrary?: "ionicons" | "simple-line-icons";
}

export const InputField = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  label,
  iconLibrary = "ionicons",
}: InputFieldProps) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <View style={styles.inputWrapper}>
      {icon &&
        (iconLibrary === "simple-line-icons" ? (
          <SimpleLineIcons
            name={icon as any}
            size={20}
            color={Colors.textSecondary}
            style={styles.inputIcon}
          />
        ) : (
          <Ionicons
            name={icon as any}
            size={20}
            color={Colors.textSecondary}
            style={styles.inputIcon}
          />
        ))}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.textPrimary,
  },
});
