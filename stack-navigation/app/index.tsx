import { Share, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onShare}>
        <Text>
          Share
        </Text>
      </TouchableOpacity>
    </View>
  );
}
