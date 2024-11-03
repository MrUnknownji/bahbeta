import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "@/constants/Colors";

type FontAwesomeNames =
  | "arrow-circle-right"
  | "user"
  | "gift"
  | "tags"
  | "envelope"
  | "lightbulb-o";

const iconData: Array<{
  id: string;
  name: FontAwesomeNames;
  label: string;
  route?:
    | "recreate-invoice"
    | "create-invoice"
    | "send-detail"
    | "request-invoice";
}> = [
  {
    id: "1",
    name: "arrow-circle-right" as FontAwesomeNames,
    label: "Send",
  },
  {
    id: "2",
    name: "user" as FontAwesomeNames,
    label: "Request",
    route: "request-invoice",
  },
  { id: "3", name: "gift" as FontAwesomeNames, label: "Send Gift" },
  { id: "4", name: "tags" as FontAwesomeNames, label: "Tags" },
  {
    id: "5",
    name: "lightbulb-o" as FontAwesomeNames,
    label: "Bill Pay",
  },
];

const quickSendData = [
  { id: "1", name: "Gabriel B. Ross" },
  { id: "2", name: "Julia A. Smith" },
  { id: "3", name: "Michael B. Jordan" },
  { id: "4", name: "Gabriel B. Ross" },
  { id: "5", name: "Julia A. Smith" },
  { id: "6", name: "Michael B. Jordan" },
];

const recentActivityData = [
  {
    id: "1",
    name: "Gabriel B. Ross",
    time: "10 Novmeber 2024",
    amount: "-34 USD",
  },
  {
    id: "2",
    name: "Julia A. Smith",
    time: "10 Novmeber 2024",
    amount: "+120 USD",
  },
  {
    id: "3",
    name: "Michael B. Jordan",
    time: "10 Novmeber 2024",
    amount: "-50 USD",
  },
  {
    id: "4",
    name: "Gabriel B. Ross",
    time: "10 Novmeber 2024",
    amount: "-34 USD",
  },
  {
    id: "5",
    name: "Julia A. Smith",
    time: "10 Novmeber 2024",
    amount: "+120 USD",
  },
  {
    id: "6",
    name: "Michael B. Jordan",
    time: "10 Novmeber 2024",
    amount: "-50 USD",
  },
];

export default function InvoiceScreen() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleIconPress = (item: (typeof iconData)[0]) => {
    if (item.label === "Send") {
      setIsDialogVisible(true);
    } else if (item.route) {
      router.push(`/invoice/${item.route}`);
    }
  };

  const handleInvoiceListItemPress = () => {
    router.push("/invoice/invoice-detail");
  };

  const handleQuickSendItemPress = () => {
    router.push("/invoice/send-detail");
  };

  const handleDialogOption = (option: "new" | "recurring") => {
    setIsDialogVisible(false);
    if (option === "new") {
      router.push("/invoice/create-invoice");
    } else {
      router.push("/invoice/recreate-invoice");
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={isDialogVisible}
        transparent
        statusBarTranslucent
        animationType="fade"
        onRequestClose={() => setIsDialogVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>Choose Invoice Type</Text>
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={() => handleDialogOption("new")}
            >
              <Text style={styles.dialogButtonText}>New Invoice</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={() => handleDialogOption("recurring")}
            >
              <Text style={styles.dialogButtonText}>Recurring Invoice</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dialogButton, styles.cancelButton]}
              onPress={() => setIsDialogVisible(false)}
            >
              <Text style={[styles.dialogButtonText, styles.cancelButtonText]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.iconsContainer}>
        {iconData.map((item) => (
          <TouchableOpacity
            style={styles.iconWrapper}
            key={item.id}
            onPress={() => handleIconPress(item)}
          >
            <View style={styles.iconContainer}>
              <FontAwesome name={item.name} size={24} color={Colors.primary} />
            </View>
            <Text style={styles.iconLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.quickSendContainer}>
        <View style={styles.quickSendHeader}>
          <Text style={styles.quickSendHeaderText}>Quick Send</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <ScrollView
          style={styles.quickSendListContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {quickSendData.map((item) => (
            <TouchableOpacity
              style={styles.quickSendItem}
              key={item.id}
              onPress={handleQuickSendItemPress}
            >
              <View style={styles.quickSendItemAvatar}>
                <Image
                  source={require("@/assets/images/quick-send-person.png")}
                  style={styles.quickSendItemAvatarImage}
                />
              </View>
              <Text style={styles.quickSendItemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.recentActivityContainer}>
        <View style={styles.recentActivityHeader}>
          <Text style={styles.recentActivityHeaderText}>Recent Activity</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <FlatList
          data={recentActivityData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.recentActivityItem}
              onPress={handleInvoiceListItemPress}
            >
              <View style={styles.recentActivityItemAvatar}>
                <Image
                  source={require("@/assets/images/paypal.png")}
                  width={40}
                  height={40}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.recentActivityItemContent}>
                <Text style={styles.recentActivityItemText}>{item.name}</Text>
                <Text style={styles.recentActivityItemDate}>{item.time}</Text>
              </View>
              <Text style={styles.recentActivityItemAmount}>{item.amount}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  iconWrapper: {
    width: "33.33%",
    alignItems: "center",
    marginVertical: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 14,
    color: Colors.textPrimary,
    textAlign: "center",
  },
  quickSendContainer: {
    paddingVertical: 15,
    backgroundColor: Colors.background,
    margin: 20,
    marginBottom: 0,
    borderRadius: 20,
    overflow: "hidden",
  },
  quickSendListContainer: {},
  quickSendHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  quickSendHeaderText: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  seeAllText: {
    fontSize: 14,
  },
  quickSendItem: {
    alignItems: "center",
    marginRight: 15,
  },
  quickSendItemAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  quickSendItemAvatarImage: {
    width: 50,
    height: 50,
  },
  quickSendItemText: {
    fontSize: 10,
    color: Colors.textPrimary,
  },
  recentActivityContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  recentActivityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  recentActivityHeaderText: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  recentActivityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  recentActivityItemAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 5,
  },
  recentActivityItemContent: {
    flex: 1,
  },
  recentActivityItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.textPrimary,
  },
  recentActivityItemDate: {
    fontSize: 12,
    color: "#000",
  },
  recentActivityItemAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.textPrimary,
  },
  dialogButton: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    marginBottom: 10,
  },
  dialogButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
  },
  cancelButtonText: {
    color: Colors.textPrimary,
  },
});
