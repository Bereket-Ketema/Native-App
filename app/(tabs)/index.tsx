import React from "react";
import { Text,  StyleSheet, useColorScheme, ScrollView, View } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";
import Flat from "./flatCard";
import Elevate from "../../components/my-components/elevate";
import Fancy from "@/components/my-components/fancy-card";

export default function Screen(){
  const isDark = useColorScheme() === "light";
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView >
        <Flat/>
        <Elevate/>
        <Fancy/>        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});