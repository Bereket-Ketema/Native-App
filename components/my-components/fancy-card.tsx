import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

export default function Fancy() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <ScrollView horizontal>
        <Image
          source={require("@/components/my-assets/phone.png")}
          style={styles.cardImage}
        />
        </ScrollView>
        <View style={styles.cardBody} >
          <Text style={styles.cardTitle} >Kurfa Chele</Text>
          <Text style={styles.cardLabel} >Pink City</Text>
          <Text style={styles.cardDescription} >Kurfa chele
            is a city that the peoples live with harmony and
            with peace
          </Text>
          <Text style={styles.cardFooter} >10 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 330,
    height: 440,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    padding: 20,
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowOffset: {width: 1,height: 1}
  },
  cardImage: {
    width: 320,
    height: 400,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    color: "#000000",
  },
  cardLabel: {
    color: "#000000"
  },
  cardDescription : {
    color: "#000000"
  },
  cardFooter:{
    color: "#000000"
  },
});
