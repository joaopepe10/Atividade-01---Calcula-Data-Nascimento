import { Stack } from "expo-router";
import { Text, View, StyleSheet, TextInput, Button} from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}

const style = StyleSheet.create({
  contaiter: {
    backgroundColor: "#3FFF"
  }
})