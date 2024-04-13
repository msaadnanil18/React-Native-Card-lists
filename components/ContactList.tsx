import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import axios from "axios";

interface IProps {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    date: string,
    age: string
},
cell:string
}

const ContactList = () => {
  const [userData, setUserData] = React.useState<Array<IProps>>([]);

  const fetchUserList = async () => {
    try {
      const response = await axios.get(
        "http://172.16.2.12:8080/api/v1/public/randomusers/user/random"
      );
      setUserData([response.data.data]); 
      
    } catch (error) {
      console.error("Error while fetching data ", error);
    }
  };

  React.useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <ScrollView>
    <Text style={styles.headingList}>Contact List</Text>
    <View style={styles.container}>
      {userData.map((user, index) => (
        <View key={index} style={styles.card}>
          <Image
            style={styles.avatar}
            source={{ uri: user.picture.large }} 
          />
          <Text>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Text>
          <Text>{user.gender}</Text>
          <Text>{user.cell}</Text>
        </View>
      ))}
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  headingList: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: "center",
    elevation: 3,
    width: 150,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
});

export default ContactList;
