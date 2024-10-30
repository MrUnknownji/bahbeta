import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { styles } from "@/styles";
import { IconButton } from "./IconButton";

export const SearchBar = () => (
  <View style={styles.searchBar}>
    <Ionicons
      name="search"
      size={20}
      color={Colors.textSecondary}
      style={styles.searchIcon}
    />
    <TextInput
      placeholder="Find invoice"
      style={styles.searchInput}
      placeholderTextColor={Colors.textSecondary}
    />
    <IconButton name="sliders" size={20} color={Colors.textSecondary} />
  </View>
);
