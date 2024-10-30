import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatCardProps } from "@/types";
import Colors from "@/constants/Colors";
import { IconButton } from "./IconButton";

export const StatCard = ({
  title,
  amount,
  count,
  type = "overdue",
}: StatCardProps & { type?: "overdue" | "awaiting" | "draft" }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "awaiting":
        return "#EFE0FF";
      default:
        return "#CEECFE";
    }
  };

  const backgroundColor = getBackgroundColor();

  return (
    <View style={[styles.statCard, { backgroundColor }]}>
      <View style={styles.statCardHeader}>
        <Text style={styles.statCardTitle}>
          {title}({count})
        </Text>
        <IconButton name="copy" size={16} color={Colors.textSecondary} />
      </View>
      <Text style={styles.statCardAmount}>
        {amount} <Text style={styles.bhdText}>BHD</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statCard: {
    padding: 16,
    borderRadius: 16,
    margin: 10,
    width: 180,
    height: 110,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    gap: 12,
  },
  statCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  statCardTitle: {
    color: "#000",
    fontSize: 13,
    fontFamily: "Inter-Medium",
  },
  statCardAmount: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
    fontFamily: "Inter-Bold",
  },
  bhdText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: "400",
  },
});
