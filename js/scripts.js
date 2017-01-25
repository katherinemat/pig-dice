//Business Logic
var diceGame = {
  currentRoll: 0,
  p1Score: 0,
};

var rollDice = function() {
  return Math.floor(Math.random()*6)+1;
}

//User Interface
$(document).ready(function() {
  $(".roll").click(function() {
    var roll = rollDice();
    $("#p1-dice-roll").empty().append(roll);
    diceGame.currentRoll += roll;
    if(roll === 1) {
      diceGame.currentRoll = 0;
    }
    $("#p1-current-roll").empty().append(diceGame.currentRoll);
  });
  $(".hold").click(function() {
    diceGame.p1Score += diceGame.currentRoll;
    $("#p1-score").empty().append(diceGame.p1Score);
    diceGame.currentRoll = 0;
  });
});
