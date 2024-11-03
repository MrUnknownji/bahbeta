import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type Option = {
  title: string;
  value: string | number;
};

type InputType = "text" | "date" | "select";

type CustomInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  type?: InputType;
  options?: Option[];
};

export const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  type = "text",
  options = [],
}: CustomInputProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      onChangeText(selectedDate.toISOString().split("T")[0]);
    }
  };

  const handleOptionSelect = (option: Option) => {
    onChangeText(option.value.toString());
    setShowOptions(false);
  };

  const renderInput = () => {
    switch (type) {
      case "date":
        return (
          <Pressable
            style={[styles.input, styles.dateInput]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.inputText}>
              {value || placeholder || label}
            </Text>
            <FontAwesome name="calendar" size={20} color={Colors.textPrimary} />
          </Pressable>
        );

      case "select":
        return (
          <Pressable
            style={[styles.input, styles.selectInput]}
            onPress={() => setShowOptions(true)}
          >
            <Text style={styles.inputText}>
              {options.find((opt) => opt.value.toString() === value)?.title ||
                placeholder ||
                label}
            </Text>
            <FontAwesome
              name="chevron-circle-down"
              size={20}
              color={Colors.textPrimary}
            />
          </Pressable>
        );

      default:
        return (
          <TextInput
            style={[styles.input, multiline && styles.multilineInput]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder || label}
            multiline={multiline}
            placeholderTextColor={Colors.textSecondary}
          />
        );
    }
  };

  return (
    <View style={styles.inputContainer}>
      {/* Main Input */}
      {renderInput()}

      {/* Date Picker Modal */}
      {showDatePicker && Platform.OS === "android" && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          onChange={handleDateChange}
        />
      )}

      {/* Options Modal */}
      <Modal
        visible={showOptions}
        transparent
        animationType="fade"
        onRequestClose={() => setShowOptions(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowOptions(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{label}</Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => handleOptionSelect(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item.value.toString() === value &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#F1F4FF",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  dateInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    width: Dimensions.get("window").width * 0.9,
    maxHeight: Dimensions.get("window").height * 0.7,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: Colors.textPrimary,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F4FF",
  },
  optionText: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  selectedOptionText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});
