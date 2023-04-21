exports.generateTeams = (setTeamOne, setTeamTwo) => {
  setTeamOne([]);
  setTeamTwo([]);

  let teamOneCount = 0;
  let teamOneRatingTotal = 0;
  let teamOneAverageRating = 0;
  let teamTwoCount = 0;
  let teamTwoRatingTotal = 0;
  let teamTwoAverageRating = 0;
  let currentPlayerCount = 0;
  let currentRatingTotal = 0;
  let averageRating = 0;

  players.forEach((player) => {
    let randomNumber = Math.random();
    let playerName = player[0];
    let playerRating = player[1];

    currentPlayerCount++;
    currentRatingTotal = playerRating - -currentRatingTotal;
    averageRating = currentRatingTotal / currentPlayerCount;

    if (randomNumber >= 0.5) {
      if (teamOneCount < 5) {
        setTeamOne((currentTeam) => [...currentTeam, playerName]);
        teamOneCount++;
        teamOneRatingTotal = playerRating - -teamOneRatingTotal;
        teamOneAverageRating = teamOneRatingTotal / teamOneCount;
      } else {
        setTeamTwo((currentTeam) => [...currentTeam, playerName]);
        teamTwoCount++;
        teamTwoRatingTotal = playerRating - -teamTwoRatingTotal;
        teamTwoAverageRating = teamTwoRatingTotal / teamTwoCount;
      }
    }
    if (randomNumber < 0.5) {
      if (teamTwoCount < 5) {
        setTeamTwo((currentTeam) => [...currentTeam, playerName]);
        teamTwoCount++;
        teamTwoRatingTotal = playerRating - -teamTwoRatingTotal;
        teamTwoAverageRating = teamTwoRatingTotal / teamTwoCount;
      } else {
        setTeamOne((currentTeam) => [...currentTeam, playerName]);
        teamOneCount++;
        teamOneRatingTotal = playerRating - -teamOneRatingTotal;
        teamOneAverageRating = teamOneRatingTotal / teamOneCount;
      }
    }

    console.log(
      "currentPlayerCount:",
      currentPlayerCount,
      "playerName:",
      playerName,
      "playerRating:",
      playerRating,
      "averageRating:",
      averageRating,
      "teamOne:",
      teamOne,
      "teamOneCount:",
      teamOneCount,
      "teamOneAverageRating:",
      teamOneAverageRating,
      "teamTwo:",
      teamTwo,
      "teamTwoCount:",
      teamTwoCount,
      "teamTwoAverageRating:",
      teamTwoAverageRating
    );
  });

  setDisableGenerateButton(true);
  setModalIsVisible(true);
};
