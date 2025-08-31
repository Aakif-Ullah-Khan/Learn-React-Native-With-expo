import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitleAlign: "center", title: "Home", headerShown: true, headerTintColor: "#ffff" , headerLargeTitleShadowVisible:false}} />
    </Stack>
  )
}
