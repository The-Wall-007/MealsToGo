import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Home } from "Containers/Restaurants/Screens";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
