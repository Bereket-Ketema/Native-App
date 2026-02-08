import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

export default function Fancy() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <ScrollView horizontal>
        <Image
          source={require("@/components/my-assets/boy.jpg")}
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
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {
    height: 350,
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription : {},
  cardFooter:{},
});
