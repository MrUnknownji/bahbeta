import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { IconButtonProps } from "@/types";
import { styles } from "@/styles";

export const IconButton = ({
  name,
  size = 24,
  color = "#000",
  onPress,
  style,
  type = "feather",
}: IconButtonProps) => (
  <TouchableOpacity
    style={[
      {
        marginLeft: 8,
      },
      style,
    ]}
    onPress={onPress}
  >
    {type === "font-awesome-5" && (
      <FontAwesome5 name={name} size={size} color={color} />
    )}
    {type === "feather" && <Feather name={name} size={size} color={color} />}
  </TouchableOpacity>
);
