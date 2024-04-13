import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ElivatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElivatedCard</Text>
      <ScrollView horizontal style={[styles.scrollView, styles.constainer]}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>and</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>get</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>more</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElivatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  constainer: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#f0f0f0",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
  cardOne: {
    backgroundColor: "#e3e1dc",
    elevation: 4,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowColor: "#dbdbd9",
  },
});
