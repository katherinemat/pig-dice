//Business Logic


//User Interface
$(document).ready(function() {
  $(".roll").click(function() {
    var rollDice = Math.floor(Math.random()*6)+1;
    $("#p1-dice-roll").empty().append(rollDice);
  });
})
