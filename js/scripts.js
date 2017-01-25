//Business Logic


//User Interface
$(document).ready(function() {
  var currentRoll = 0;
  $(".roll").click(function() {
    var rollDice = Math.floor(Math.random()*6)+1;
    $("#p1-dice-roll").empty().append(rollDice);
    currentRoll += rollDice;
    if(rollDice === 1) {
      currentRoll = 0;
    }
    $("#p1-current-roll").empty().append(currentRoll);
  });

})
