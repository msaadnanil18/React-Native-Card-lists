import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Treanding Places</Text>
      <ScrollView>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardText}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra Uttar Pradesh</Text>
            <Text style={styles.cardDescrption}>
              The Taj Mahal is an ivory-white marble mausoleum on the right bank
              of the river Yamuna in Agra, Uttar Pradesh, India.
            </Text>
            <Text style={styles.cardFooter}>150Km far from delhi</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardText}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra Uttar Pradesh</Text>
            <Text style={styles.cardDescrption}>
              The Taj Mahal is an ivory-white marble mausoleum on the right bank
              of the river Yamuna in Agra, Uttar Pradesh, India.
            </Text>
            <Text style={styles.cardFooter}>150Km far from delhi</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 18,
  },
  card: {
    height: 350,
    width: 330,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardOne: {
    backgroundColor: "#e3e1dc",
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 9,
  },
  cardLabel: {
    marginBottom: 10,
    fontSize: 14,
  },
  cardDescrption: {
    fontSize: 12,
    marginBottom: 10,
  },
  cardFooter: {
    fontSize: 12,
  },
});

export default FancyCard;
