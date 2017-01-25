//Business Logic
var diceGame = {
  p1CurrentRoll: 0,
  p1Score: 0,
  p2CurrentRoll: 0,
  p2Score: 0,
};

var rollDice = function() {
  return Math.floor(Math.random()*6)+1;
}

//User Interface
$(document).ready(function() {
  $(".roll1").click(function() {
    var roll = rollDice();
    $("#p1-dice-roll").empty().append(roll);
    diceGame.p1CurrentRoll += roll;
    if(roll === 1) {
      diceGame.p1CurrentRoll = 0;
    }
    $("#p1-current-roll").empty().append(diceGame.p1CurrentRoll);
  });
  $(".hold1").click(function() {
    diceGame.p1Score += diceGame.p1CurrentRoll;
    $("#p1-score").empty().append(diceGame.p1Score);
    diceGame.p1CurrentRoll = 0;
    if(diceGame.p1Score >= 100) {
      $("#results").show();
      $(".winner").append("PLAYER 1");
    }
  });
  $(".roll2").click(function() {
    var roll = rollDice();
    $("#p2-dice-roll").empty().append(roll);
    diceGame.p2CurrentRoll += roll;
    if(roll === 1) {
      diceGame.p2CurrentRoll = 0;
    }
    $("#p2-current-roll").empty().append(diceGame.p2CurrentRoll);
  });
  $(".hold2").click(function() {
    diceGame.p2Score += diceGame.p2CurrentRoll;
    $("#p2-score").empty().append(diceGame.p2Score);
    diceGame.p2CurrentRoll = 0;
    if(diceGame.p2Score >= 100) {
      $("#results").show();
      $(".winner").append("PLAYER 2");
    }
  });
});
