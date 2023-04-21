import { ScrollView, Pressable, Text, StyleSheet, View } from "react-native";

const PlayersList = ({ players, setPlayers, setDisableGenerateButton }) => {
  return (
    <ScrollView style={styles.scrollview}>
      <Text style={styles.text}>Players Selected:</Text>
      {players.map((player) => (
        <Pressable
          onPress={() => {
            setPlayers((currentPlayers) => {
              return currentPlayers.filter((playersName) => {
                return playersName !== player;
              });
            });
            setDisableGenerateButton(true);
          }}
        >
          <Text key={player.playerKey} style={styles.player_text}>
            {player.playerName}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    width: "100%",
  },
  player_text: {
    marginTop: 17,
    padding: 8,
    borderWidth: 0,
    backgroundColor: "lightgreen",
    borderRadius: 5,
  },
  text: { fontFamily: "monospace" },
});

export default PlayersList;
