import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { IconButton } from "./IconButton";

export const ActionBar = () => (
  <View style={styles.actionsBar}>
    <View style={styles.tabButtons}>
      <TouchableOpacity style={styles.activeTabButton}>
        <Text style={styles.activeTabText}>Invoice</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.inactiveTabButton}>
        <Text style={styles.inactiveTabText}>Drafts</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.actionIcons}>
      <IconButton name="plus" size={20} type="font-awesome-5" />
      <IconButton name="filter" size={20} type="font-awesome-5" />
      <IconButton name="file-export" size={20} type="font-awesome-5" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  actionsBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  tabButtons: {
    flexDirection: "row",
  },
  activeTabButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTabText: {
    color: "white",
    fontWeight: "500",
  },
  inactiveTabButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
  },
  inactiveTabText: {
    color: Colors.textSecondary,
  },
  actionIcons: {
    flexDirection: "row",
  },
});
