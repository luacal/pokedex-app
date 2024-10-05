import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Pokédex",
          headerStyle: { backgroundColor: "#cc0000" },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
