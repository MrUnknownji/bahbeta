import React, { useMemo } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { InputField } from "./InputField";
import { CustomButton } from "./CustomButton";
import { OTPInput } from "./OTPInput";
import { PasswordInputField } from "./PasswordInputField";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ForgotPasswordSheetProps {
  step: number;
  resetEmail: string;
  setResetEmail: (email: string) => void;
  otp: string[];
  setOtp: (otp: string[]) => void;
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  onContinue: () => void;
}

export const ForgotPasswordSheet = ({
  step,
  resetEmail,
  setResetEmail,
  otp,
  setOtp,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  onContinue,
}: ForgotPasswordSheetProps) => {
  const isEmailValid = useMemo(() => {
    return EMAIL_REGEX.test(resetEmail);
  }, [resetEmail]);

  const isOtpValid = useMemo(() => {
    return otp.every((digit) => digit !== "") && otp.length === 4;
  }, [otp]);

  const isPasswordValid = useMemo(() => {
    const isLengthValid = newPassword.length >= 8;
    const doPasswordsMatch = newPassword === confirmPassword;
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    return isLengthValid && doPasswordsMatch && hasNumber && hasSpecialChar;
  }, [newPassword, confirmPassword]);

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetTitle}>Forgot Password</Text>
            <Text style={styles.bottomSheetSubtitle}>
              Enter your email for the verification process, we will send 4
              digits code to your email.
            </Text>
            <InputField
              placeholder="Enter your email"
              value={resetEmail}
              onChangeText={setResetEmail}
              autoCapitalize="none"
              icon="mail-outline"
              label="Email"
            />
            <CustomButton
              title="Continue"
              onPress={onContinue}
              disabled={!isEmailValid}
            />
          </View>
        );

      case 1:
        return (
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetTitle}>Enter your OTP code</Text>
            <Text style={styles.bottomSheetSubtitle}>
              Enter the 4 digits code that you received on your email
            </Text>
            <OTPInput otp={otp} setOtp={setOtp} />
            <CustomButton
              title="Continue"
              onPress={onContinue}
              disabled={!isOtpValid}
            />
          </View>
        );

      case 2:
        return (
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetTitle}>Create New Password</Text>
            <Text style={styles.bottomSheetSubtitle}>
              Set the new password for your account so that you can login and
              access all the features.
            </Text>
            <PasswordInputField
              placeholder="Enter New Password"
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <PasswordInputField
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {newPassword && (
              <Text style={styles.passwordRequirements}>
                Password must contain:
                {"\n"}- At least 8 characters
                {"\n"}- At least one number
                {"\n"}- At least one special character
                {"\n"}- Match confirmation password
              </Text>
            )}
            <CustomButton
              title="Continue"
              onPress={onContinue}
              disabled={!isPasswordValid}
            />
          </View>
        );

      default:
        return null;
    }
  };

  return renderStepContent();
};

const styles = StyleSheet.create({
  bottomSheetContent: {
    padding: 24,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  bottomSheetSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: Colors.background,
    marginRight: 8,
  },
  passwordRequirements: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 8,
    marginBottom: 8,
  },
});
