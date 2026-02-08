import React from "react";
import { Text,  StyleSheet, useColorScheme, ScrollView, View } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";
import Flat from "./flatCard";
import Elevated from "./elevated";

export default function Screen(){
  const isDark = useColorScheme() === "light";
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Flat/>
        <Elevated/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});