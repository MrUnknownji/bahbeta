import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvoiceCardProps } from "@/types";
import Colors from "@/constants/Colors";
import { IconButton } from "./IconButton";
import { Feather } from "@expo/vector-icons";

export const InvoiceCard = ({ id, name, amount, status }: InvoiceCardProps) => {
  const getStatusStyle = () => {
    switch (status) {
      case "OVERDUE":
        return styles.statusOverdue;
      case "PAID":
        return styles.statusPaid;
      default:
        return styles.statusPending;
    }
  };

  return (
    <View style={styles.invoiceCard}>
      <View style={styles.invoiceCardHeader}>
        <Text style={styles.invoiceId}>{id}</Text>
        <View style={styles.invoiceActions}>
          <IconButton name="copy" size={20} color={Colors.textPrimary} />
          <IconButton
            name="more-vertical"
            size={20}
            color={Colors.textPrimary}
          />
        </View>
      </View>
      <View style={styles.invoiceCardBody}>
        <View style={styles.invoiceUser}>
          <Feather name="user" size={20} color={Colors.textSecondary} />
          <Text style={styles.userName}>{name}</Text>
        </View>
      </View>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceAmount}>{amount}</Text>
        <View style={[styles.statusBadge, getStatusStyle()]}>
          <Text style={[styles.statusText, getStatusStyle()]}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  invoiceCard: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 12,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  invoiceCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  invoiceId: {
    color: "#000",
    fontWeight: "600",
  },
  invoiceActions: {
    flexDirection: "row",
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 10,
  },
  invoiceCardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  invoiceUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userAvatar: {
    width: 32,
    height: 32,
    backgroundColor: "#E5E7EB",
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  invoiceDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginLeft: 28,
  },
  invoiceAmount: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3B82F6",
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  statusText: {
    fontSize: 12,
  },
  statusOverdue: {
    backgroundColor: "#FEE2E2",
    color: "#EF4444",
  },
  statusPaid: {
    backgroundColor: "#D1FAE5",
    color: "#10B981",
  },
  statusPending: {
    backgroundColor: "#FEF3C7",
    color: "#F59E0B",
  },
});
