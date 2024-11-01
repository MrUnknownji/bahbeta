import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

type CustomHeaderProps = {
  title: string;
};

export const CustomHeader = ({ title }: CustomHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <FontAwesome name="language" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
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
