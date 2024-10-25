// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Drawer } from "expo-router/drawer";

// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer>
//         <Drawer.Screen
//           name="index"
//           options={{
//             drawerLabel: "Home",
//             title: "Home",
//             headerStyle: { backgroundColor: "red" },
//           }}
//         />
//         <Drawer.Screen
//           name="about"
//           options={{
//             drawerLabel: "About",
//             title: "About",
//             headerStyle: { backgroundColor: "red" },
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }

import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
