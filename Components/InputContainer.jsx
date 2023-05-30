import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useState } from "react";

const InputContainer = ({ setPlayers, players, setDisableGenerateButton }) => {
  const [enteredPlayerText, setEnteredPlayerText] = useState("");

  const playerTextInputHandler = (enteredText) => {
    setEnteredPlayerText(enteredText);
  };

  const addPlayerButton = () => {
    if (enteredPlayerText !== "" && players.length < 10) {
      setPlayers((currentPlayers) => [
        ...currentPlayers,
        {
          playerName: enteredPlayerText,
          playerKey: players.length,
        },
      ]);

      if (players.length === 9) {
        setDisableGenerateButton(false);
      }
      setEnteredPlayerText("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.enter_player_here}>
        <Text style={styles.text}>Enter Player Here:</Text>
      </View>
      <View style={styles.input_container}>
        <View style={styles.text_input_container}>
          <TextInput
            style={styles.player_input}
            placeholder="Player name"
            onChangeText={playerTextInputHandler}
            value={enteredPlayerText}
          />
        </View>
        <View>
          <Button
            title="Add Player"
            color={"#015800"}
            onPress={addPlayerButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input_container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#548060",
  },
  text_input_container: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 0,
    alignItems: "center",
    width: "70%",
  },
  player_input: {
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 5,
    width: "82%",
    padding: 4,
    backgroundColor: "white",
    marginBottom: 7,
  },
  text: { fontFamily: "monospace" },
});

export default InputContainer;
