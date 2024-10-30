import { Feather, FontAwesome5 } from "@expo/vector-icons";

// Get the correct icon names type from Feather
type FeatherIconNames = keyof typeof Feather.glyphMap;
type FontAwesomeIconNames = keyof typeof FontAwesome5.glyphMap;

export interface StatCardProps {
  title: string;
  amount: string;
  count: number;
}

export interface InvoiceCardProps {
  id: string;
  name: string;
  amount: string;
  status: "OVERDUE" | "PAID" | "PENDING" | "24 hours";
}

export interface IconButtonProps {
  name: FeatherIconNames | FontAwesomeIconNames;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: any;
  type?: "feather" | "font-awesome-5";
}
