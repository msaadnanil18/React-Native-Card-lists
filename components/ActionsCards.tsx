import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";

const ActionsCards = () => {
  function openWebsite(webSiteLink: string) {
    Linking.openURL(webSiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Cards Card</Text>
      <View >
        
        <View style={[styles.card, styles.eivatedCard]}>
        <Image
          source={{
            uri: "https://i0.wp.com/unspokensmiles.org/wp-content/uploads/2023/03/Purple-Minimal-International-Womens-Day-Free-Facebook-Cover.png?resize=1536%2C865&ssl=1",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            repellat nesciunt animi quo mollitia unde dolorem, saepe possimus.
            Rem, molestiae ratione quis repudiandae exercitationem impedit
            temporibus maiores repellendus dolores aut.
          </Text>
        </View>
        <View style={styles.footerContainer}>
         <TouchableOpacity
         onPress={() => openWebsite('https://unspokensmiles.org/blog/?gclid=Cj0KCQjwlN6wBhCcARIsAKZvD5h5xMG7xIOQCrBeL4h4N4wJU8p5PJOmDmm5n3y4ROYNlztpPloHX18aAkeyEALw_wcB') }
         >
            <Text style={styles.socialLink} >
                Read more
            </Text>
         </TouchableOpacity>
        
         <TouchableOpacity
         onPress={() => openWebsite('https://www.instagram.com/adnan_mahmood_11') }
         >
            <Text style={styles.socialLink}>
                Follow more
            </Text>
         </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal: 12,
    marginVertical: 2,
  },
  card: {
    height: 330,
    width: 330,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  eivatedCard: {
    backgroundColor:'#f0f0f0',
    elevation:3,
    shadowOffset: {
        height: 2,
        width: 2,
      },
      shadowColor: "#dbdbd9",
      shadowOpacity:0.3
  },
  headingContainer: {
    height:40
  },
  headerText: {},
  cardImage: {
    height:190
  },
  bodyContainer: {
   padding:10
  },
  footerContainer: {
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },
  socialLink:{
    fontSize:16,
    color:'#ebbfbc',
    backgroundColor:'#FFF',
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:6

    
  }
});

export default ActionsCards;
