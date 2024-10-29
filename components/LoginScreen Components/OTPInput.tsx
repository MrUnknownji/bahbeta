import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

interface OTPInputProps {
  otp: string[];
  setOtp: (otp: string[]) => void;
}

export const OTPInput = ({ otp, setOtp }: OTPInputProps) => {
  const inputRefs = useRef<TextInput[]>([]);

  const focusNext = (index: number) => {
    if (index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const focusPrevious = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "") {
      focusNext(index);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      focusPrevious(index);
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <View key={index} style={styles.otpInputWrapper}>
          <View style={styles.coloredView} />
          <TextInput
            ref={(ref) => {
              if (ref) {
                inputRefs.current[index] = ref;
              }
            }}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            selectTextOnFocus
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  otpInputWrapper: {
    position: "relative",
    marginRight: 8,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#F7F7F5",
    zIndex: 1,
    elevation: 2,
  },
  coloredView: {
    position: "absolute",
    width: 50,
    height: 54,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    bottom: -4,
  },
});
