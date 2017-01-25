//Business Logic
var diceGame = {
  p1CurrentRoll: 0,
  p1Score: 0,
  p2CurrentRoll: 0,
  p2Score: 0,
};


// var allPlayers = [player1, player2];
//
// function Player(html_class) {
//   this.total = 0;
//   this.html_class = html_class;
//   allPlayers.push(this);
// }
//
// var currentPlayer = 0;
//
// var player1 = new Player(".p1");
// var player2 = new Player(".p2");
//
// allPlayers[currentPlayer].html_class;
//
// function Player(name) {
//   this.currentRoll = 0;
//   this.overallScore = 0;
//   this.name = name;
// }
// players = [];
//
// $(document).ready(function() {
//   $("#user").submit(function(event) {
//     event.preventDefault();
//     var user = $("input#name").val();
//
//     var newPlayer = new Player(user);
//     players.push(newPlayer);
//     console.log(players);
//     $("input#name").val("");
//   });
// });






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
      $(".p1Turn, .p2Turn").toggle();
      $("#p2-current-roll").empty().append(diceGame.p1CurrentRoll);
      $("#p2-dice-roll").empty().append("");
    }
    $("#p1-current-roll").empty().append(diceGame.p1CurrentRoll);
  });

  $(".hold1").click(function() {
    $(".p1Turn, .p2Turn").toggle();
    diceGame.p1Score += diceGame.p1CurrentRoll;
    $("#p1-score").empty().append(diceGame.p1Score);
    diceGame.p1CurrentRoll = 0;
    if(diceGame.p1Score >= 10) {
      $("#results").show();
      $(".winner").append("PLAYER 1");
    }
    $("#p2-current-roll").empty().append(diceGame.p1CurrentRoll);
    $("#p2-dice-roll").empty().append("");
  });
  $(".roll2").click(function() {
    var roll = rollDice();
    $("#p2-dice-roll").empty().append(roll);
    diceGame.p2CurrentRoll += roll;
    if(roll === 1) {
      diceGame.p2CurrentRoll = 0;
      $(".p1Turn, .p2Turn").toggle();
      $("#p1-current-roll").empty().append(diceGame.p1CurrentRoll);
      $("#p1-dice-roll").empty().append("");
    }
    $("#p2-current-roll").empty().append(diceGame.p2CurrentRoll);
  });

  $(".hold2").click(function() {
    $(".p1Turn, .p2Turn").toggle();
    diceGame.p2Score += diceGame.p2CurrentRoll;
    $("#p2-score").empty().append(diceGame.p2Score);
    diceGame.p2CurrentRoll = 0;
    if(diceGame.p2Score >= 100) {
      $("#results").show();
      $(".winner").append("PLAYER 2");
    }
    $("#p1-current-roll").empty().append(diceGame.p1CurrentRoll);
    $("#p1-dice-roll").empty().append("");

  });
});
