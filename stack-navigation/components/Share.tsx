import React from 'react';
import { Share, StyleSheet, Text, View } from 'react-native';

const Share = () => {
       // Function to handle sharing the app 
   // import Share from react-native must 
  const onShare = async () => {
    try {
      const message =
        "Hey! Check this out 🚀" +
        "\n\n" + // new line for readability
        "Title: Share With Friends" +
        "\n" +
        "Link: https://example.com";

      const result = await Share.share({ message });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with:", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <View>
      <Text>Share</Text>
    </View>
  )
}

export default Share

const styles = StyleSheet.create({})