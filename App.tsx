import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FlateCard from "./components/FlateCard";
import ElivatedCard from "./components/ElivatedCard";
import FancyCard from "./components/FancyCard";
import ActionsCards from "./components/ActionsCards";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlateCard />
        <ElivatedCard />
        <FancyCard />

        <ActionsCards />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
