import { View, Button, StyleSheet } from "react-native";

const ExecuteButtons = ({
  players,
  setPlayers,
  setDisableGenerateButton,
  disableGenerateButton,
  setTeamOne,
  teamOne,
  setTeamTwo,
  teamTwo,
  setModalIsVisible,
}) => {
  const generateTeams = () => {
    setTeamOne([]);
    setTeamTwo([]);

    let teamOneCount = 0;
    let teamTwoCount = 0;
    let currentPlayerCount = 0;

    players.forEach((player) => {
      let randomNumber = Math.random();
      let playerName = player.playerName;

      currentPlayerCount++;

      if (randomNumber >= 0.5) {
        if (teamOneCount < 5) {
          setTeamOne((currentTeam) => [...currentTeam, playerName]);
          teamOneCount++;
        } else {
          setTeamTwo((currentTeam) => [...currentTeam, playerName]);
          teamTwoCount++;
        }
      }
      if (randomNumber < 0.5) {
        if (teamTwoCount < 5) {
          setTeamTwo((currentTeam) => [...currentTeam, playerName]);
          teamTwoCount++;
        } else {
          setTeamOne((currentTeam) => [...currentTeam, playerName]);
          teamOneCount++;
        }
      }

      console.log(
        "currentPlayerCount:",
        currentPlayerCount,
        "playerName:",
        playerName,
        "teamOne:",
        teamOne,
        "teamOneCount:",
        teamOneCount,

        "teamTwo:",
        teamTwo,
        "teamTwoCount:",
        teamTwoCount
      );
    });

    setDisableGenerateButton(true);
    setModalIsVisible(true);
  };

  return (
    <View style={styles.bottom_buttons}>
      <View style={styles.buttons}>
        <Button
          title="Pickle Teams!"
          color={"#DE8700"}
          onPress={generateTeams}
          disabled={disableGenerateButton}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Clear Players"
          color={"darkred"}
          onPress={() => {
            setPlayers([]);
            setDisableGenerateButton(true);
          }}
        />
      </View>
      <Button
        title="auto"
        color="blue"
        onPress={() => {
          setPlayers([
            {
              playerName: "Eddy",
              playerKey: 1,
            },
            {
              playerName: "Jack",
              playerKey: 2,
            },
            {
              playerName: "Fraser",
              playerKey: 3,
            },
            {
              playerName: "Mike",
              playerKey: 4,
            },
            {
              playerName: "Robin",
              playerKey: 5,
            },
            {
              playerName: "Alex",
              playerKey: 6,
            },
            {
              playerName: "Adam",
              playerKey: 7,
            },
            {
              playerName: "Stu",
              playerKey: 8,
            },
            {
              playerName: "Kyle",
              playerKey: 9,
            },
            {
              playerName: "Mark",
              playerKey: 10,
            },
          ]),
            setDisableGenerateButton(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottom_buttons: { flexDirection: "row" },
  buttons: { paddingLeft: 10, paddingRight: 10 },
});

export default ExecuteButtons;
