import React, { useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { InputField } from "@/components/LoginScreen Components/InputField";
import { RememberMeCheckbox } from "@/components/LoginScreen Components/RememberMeCheckbox";
import { CustomButton } from "@/components/LoginScreen Components/CustomButton";
import { ForgotPasswordSheet } from "@/components/LoginScreen Components/ForgotPasswordSheet";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [bottomSheetStep, setBottomSheetStep] = useState(0);
  const [resetEmail, setResetEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid = useMemo(() => {
    const isLengthValid = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return isLengthValid && hasNumber && hasSpecialChar;
  }, [password]);

  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["40%"], []);

  const handleForgotPassword = () => {
    setBottomSheetStep(0);
    bottomSheetRef.current?.expand();
  };

  const handleContinue = () => {
    if (bottomSheetStep === 2) {
      setBottomSheetStep(0);
      bottomSheetRef.current?.snapToPosition(0);
      return;
    }
    setBottomSheetStep((prev) => prev + 1);
  };

  const handleLogin = () => {
    router.push("/(tabs)");
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <LinearGradient colors={Colors.gradient} style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Log in</Text>
          <Text style={styles.subtitle}>Hello there, log in to Continue!</Text>

          <View style={styles.inputContainer}>
            <InputField
              icon="person-outline"
              placeholder="Username or Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />

            <InputField
              icon="lock-closed-outline"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.optionsContainer}>
              <RememberMeCheckbox
                checked={rememberMe}
                onToggle={handleRememberMeToggle}
                onForgotPassword={handleForgotPassword}
              />
            </View>

            <CustomButton
              title="Log In"
              onPress={handleLogin}
              disabled={email.length < 4 || !isPasswordValid}
            />
          </View>
        </View>

        {/* Forgot Password Bottom Sheet */}
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
          enableHandlePanningGesture
          enableContentPanningGesture
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
            />
          )}
        >
          <BottomSheetView>
            <ForgotPasswordSheet
              step={bottomSheetStep}
              resetEmail={resetEmail}
              setResetEmail={setResetEmail}
              otp={otp}
              setOtp={setOtp}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              onContinue={handleContinue}
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  formContainer: {
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 32,
  },
  inputContainer: {
    gap: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
});

export default LoginScreen;
