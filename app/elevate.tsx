import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Elevate() {
  return (
    <View>
      <Text style={styles.first}>Elevated Card</Text>
        <ScrollView style={styles.container} horizontal={true}>
          <View style={[styles.card, styles.all]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.all]}>
            <Text>Me</Text>
          </View>
          <View style={[styles.card, styles.all]}>
            <Text>To</Text>
          </View>
          <View style={[styles.card, styles.all]}>
            <Text>Scroll</Text>
          </View>
          <View style={[styles.card, styles.all]}>
            <Text>More...</Text>
          </View>
          <View style={[styles.card, styles.all]}>
            <Text>😀</Text>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  first: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    padding : 8
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:4,
    width: 100,
    height: 100,
    margin: 8
  },
  all: {
    backgroundColor: "#868080",
    elevation: 4
  },
});
