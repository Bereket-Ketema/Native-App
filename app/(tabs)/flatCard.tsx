import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Flat() {
  return (
    <View>
      <Text style={styles.first}>Flash Card</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.red, styles.reds]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.red, styles.blue]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.red, styles.gray]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.red, styles.green]}>
            <Text>Gray</Text>
          </View>
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
    flex: 1,
    flexDirection: "row",
    padding : 8
  },
  red: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  reds: {
    backgroundColor: "#a11b1b",
  },
  blue: {
    backgroundColor: "#411dc5",
  },
  gray: {
    backgroundColor: "#3de627",
  },
  green: {
    backgroundColor: "#e0387e"
  }
});
