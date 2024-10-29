import { Text, View } from "react-native";
import SplashScreen from "./SplashScreen";
import "react-native-gesture-handler";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SplashScreen />
    </View>
  );
}
