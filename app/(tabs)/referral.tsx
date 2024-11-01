import { CustomButton } from '@/components/Invoice/CustomButton';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Share } from 'react-native';

export const ReferralScreen = () => {
  const description = "Right Now, you probably know someone who is travelling abroad or looking to budget their spending, so why not let them know about Revolut?";

  const handleEmailShare = async () => {
    try {
      await Share.share({
        message: description,
        title: 'Join Revolut',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSocialShare = async (platform: string) => {
    try {
      await Share.share({
        message: description,
        title: 'Join Revolut',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Invite your friends</Text>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton 
            title="Invite via Email"
            onPress={handleEmailShare}
            backgroundColor="#FF23E9"
          />
          
          <CustomButton 
            title="Share on Facebook"
            onPress={() => handleSocialShare('facebook')}
            backgroundColor="#4171D0"
          />
          
          <CustomButton 
            title="Share on Twitter"
            onPress={() => handleSocialShare('twitter')}
            backgroundColor="#2FA2E0"
          />
          
          <CustomButton 
            title="Share on Linkedin"
            onPress={() => handleSocialShare('linkedin')}
            backgroundColor="#4194D0"
          />
        </View>
      </View>
    </View>
  );
};

export default ReferralScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:80
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginHorizontal:10
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
});