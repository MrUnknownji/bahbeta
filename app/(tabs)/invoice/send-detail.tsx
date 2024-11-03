import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { CustomButton } from "@/components/Invoice/CustomButton";

type TransactionDetail = {
  label: string;
  value: string;
};

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function SendDetailScreen() {
  const transactionDetails: TransactionDetail[] = [
    { label: "Amount", value: "16,000 USD" },
    { label: "Charge", value: "1.75 USD" },
    { label: "Gateway", value: "Paypal" },
    { label: "Date", value: "Nov 24, 2024" },
  ];

  const handleReturnHome = () => {
    router.dismissAll();
    router.push("/(tabs)/");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Successful</Text>
          <View style={styles.iconOuterContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name="check" size={32} color="#fff" />
            </View>
          </View>
          <Text style={styles.subtitle}>Sent Success</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$ 16,000</Text>
        </View>

        <View style={styles.detailsContainer}>
          {transactionDetails.map((detail, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailValue}>{detail.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title="Return Home" onPress={handleReturnHome} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  iconOuterContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 30,
    marginBottom: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#374151",
  },
  amountContainer: {
    backgroundColor: "#E2E2E2",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginVertical: 24,
    width: "100%",
    alignItems: "center",
  },
  amount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
  detailsContainer: {
    width: "100%",
    gap: 4,
    marginBottom: 20,
  },
  detailRow: {
    backgroundColor: "#E2E2E2",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#9A9A9A",
    borderRadius: 8,
  },
  detailLabel: {
    fontSize: 16,
    color: "#6B7280",
  },
  detailValue: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },
  buttonContainer: {
    width: "100%",
    marginTop: "auto",
    marginBottom: 20,
  },
});
