import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "./Components/Header";
import InputContainer from "./Components/InputContainer";
import PlayersList from "./Components/PlayersList";
import ExecuteButtons from "./Components/ExecuteButtons";
import TeamDisplay from "./Components/TeamDisplay";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [players, setPlayers] = useState([]);
  const [disableGenerateButton, setDisableGenerateButton] = useState(true);
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [teamOneAverageRating, setTeamOneAverageRating] = useState(0);
  const [teamTwoAverageRating, setTeamTwoAverageRating] = useState(0);

  return (
    <>
      <StatusBar hidden={true} />
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "green",
            tabBarActiveBackgroundColor: "#daf5e1",
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="person-add-outline"
                    size={24}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
            }}
            name="Add Player"
            component={() => (
              <InputContainer
                setDisableGenerateButton={setDisableGenerateButton}
                setPlayers={setPlayers}
                players={players}
              />
            )}
          />
          <Tab.Screen
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="body-outline"
                    size={24}
                    color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  />
                );
              },
            }}
            name="Player List"
            component={() => {
              return (
                <View style={styles.players_tab}>
                  <PlayersList
                    players={players}
                    setPlayers={setPlayers}
                    setDisableGenerateButton={setDisableGenerateButton}
                  />
                  <ExecuteButtons
                    players={players}
                    setPlayers={setPlayers}
                    disableGenerateButton={disableGenerateButton}
                    setDisableGenerateButton={setDisableGenerateButton}
                    setTeamOne={setTeamOne}
                    teamOne={teamOne}
                    setTeamTwo={setTeamTwo}
                    teamTwo={teamTwo}
                    setTeamOneAverageRating={setTeamOneAverageRating}
                    setTeamTwoAverageRating={setTeamTwoAverageRating}
                    setModalIsVisible={setModalIsVisible}
                  />
                  <TeamDisplay
                    modalIsVisible={modalIsVisible}
                    teamOneAverageRating={teamOneAverageRating}
                    teamTwoAverageRating={teamTwoAverageRating}
                    teamOne={teamOne}
                    teamTwo={teamTwo}
                    setModalIsVisible={setModalIsVisible}
                    setDisableGenerateButton={setDisableGenerateButton}
                  />
                </View>
              );
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

      {/* <View style={styles.container}>
        {/* <ImageBackground
          source={require("../TeamPickerProject-fe/assets/pickles.jpg")}
          resizeMode="cover"
          style={styles.background_image}
        > */}
      {/* <InputContainer
          setDisableGenerateButton={setDisableGenerateButton}
          setPlayers={setPlayers}
          players={players}
        />
        <PlayersList
          players={players}
          setPlayers={setPlayers}
          setDisableGenerateButton={setDisableGenerateButton}
        />
        <ExecuteButtons
          players={players}
          setPlayers={setPlayers}
          disableGenerateButton={disableGenerateButton}
          setDisableGenerateButton={setDisableGenerateButton}
          setTeamOne={setTeamOne}
          teamOne={teamOne}
          setTeamTwo={setTeamTwo}
          teamTwo={teamTwo}
          setTeamOneAverageRating={setTeamOneAverageRating}
          setTeamTwoAverageRating={setTeamTwoAverageRating}
          setModalIsVisible={setModalIsVisible}
        />
        <TeamDisplay
          modalIsVisible={modalIsVisible}
          teamOneAverageRating={teamOneAverageRating}
          teamTwoAverageRating={teamTwoAverageRating}
          teamOne={teamOne}
          teamTwo={teamTwo}
          setModalIsVisible={setModalIsVisible}
          setDisableGenerateButton={setDisableGenerateButton}
        /> */}
    </>
  );
}

const styles = StyleSheet.create({
  players_tab: {
    backgroundColor: "green",
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  nav_container: { backgroundColor: "green" },
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 34,
    alignItems: "center",
    backgroundColor: "green",
  },
  background_image: {},
  text: {
    fontFamily: "sans-serif",
    fontWeight: "300",
    fontSize: 15.2,
  },
});
