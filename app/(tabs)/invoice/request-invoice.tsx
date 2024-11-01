import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { CustomInput } from "@/components/Invoice/CustomInput";
import { CustomButton } from "@/components/Invoice/CustomButton";
import { SendOptionsList } from "@/components/Invoice/SendOptionsList";
import Colors from "@/constants/Colors";
import { CustomHeader } from "@/components/Invoice/CustomHeader";

export default function RequestInvoiceScreen() {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    customerName: "",
    remarks: "",
  });

  const [sendOptions, setSendOptions] = useState([
    { id: "1", label: "SMS", icon: "commenting", selected: true },
    { id: "2", label: "Email", icon: "envelope", selected: true },
    { id: "3", label: "WhatsApp", icon: "whatsapp", selected: true },
  ]);

  const handleToggleOption = (id: string) => {
    setSendOptions((options) =>
      options.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  const handleSendRequest = () => {
    console.log("Sending Request:", { formData, sendOptions });
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", { formData, sendOptions });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <View style={styles.content}>
        <CustomHeader title="Request" />
        <CustomInput
          label="Mobile Number"
          value={formData.mobileNumber}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, mobileNumber: text }))
          }
          placeholder="Mobile Number"
        />
        <CustomInput
          label="Customer Name"
          value={formData.customerName}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, customerName: text }))
          }
          placeholder="Customer Name"
        />

        <CustomInput
          label="Remarks"
          value={formData.remarks}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, remarks: text }))
          }
          placeholder="Remarks"
          multiline
        />

        <SendOptionsList options={sendOptions} onToggle={handleToggleOption} />

        <CustomButton
          title="Save Draft"
          onPress={handleSaveDraft}
          variant="secondary"
        />
        <CustomButton title="Send Request" onPress={handleSendRequest} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
});
