$(document).ready(function() {
  function makeAMadLib() {
    var noun = $("#noun").val();
    var adjective = $("#adjective").val();
    var yourNameHere = $("#yourNameHere").val();
    $("#story").append(
      "<p> " +
        yourNameHere +
        " really likes" +
        " " +
        adjective +
        " " +
        noun +
        " </p>"
    );
    var userObject = {};
    userObject.noun = noun;
    userObject.adjective = adjective;
    userObject.yourNameHere = yourNameHere;
  }

  $("#lib-button").on("click", function() {
    makeAMadLib();
  });
});
