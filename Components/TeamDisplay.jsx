import Header from "./Header";
import {
  Modal,
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";

const TeamDisplay = ({
  modalIsVisible,
  teamOneAverageRating,
  teamTwoAverageRating,
  teamOne,
  teamTwo,
  setModalIsVisible,
  setDisableGenerateButton,
}) => {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <Header />
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.text}>
            Team One: (average rating - {teamOneAverageRating})
          </Text>
          {teamOne.map((player) => (
            <Text key={player} style={styles.player_text}>
              {player}
            </Text>
          ))}
          <Text></Text>
          <Text></Text>
          <Text style={styles.text}>
            Team Two: (average rating - {teamTwoAverageRating})
          </Text>
          {teamTwo.map((player) => (
            <Text key={player} style={styles.player_text}>
              {player}
            </Text>
          ))}
        </ScrollView>
        <Button
          title="Back"
          color={"#DE8700"}
          onPress={() => {
            setModalIsVisible(false);
            setDisableGenerateButton(false);
          }}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  player_text: {
    marginTop: 17,
    padding: 8,
    borderWidth: 0,
    backgroundColor: "lightgreen",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 20,
    backgroundColor: "green",
    alignItems: "center",
  },
  scrollview: {
    width: "100%",
  },
  text: {
    fontFamily: "monospace",
    fontWeight: "300",
    fontSize: 15.2,
    marginTop: 8,
  },
});

export default TeamDisplay;
