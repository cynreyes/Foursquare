$(document).ready(function() {

$("#go").click(function() {
    var location = $("#address").val();
    var type = $("#foodtype").val();
    var part1 = "https://api.foursquare.com/v2/venues/search?v=20161016&near="
    var part2 = "&query="
    var part3 = "&intent=checkin&client_id=ALYRTCBPNMVZEALO3WD0GCDKRPYYKKBFZTU5F5PQZW4FSTHS&client_secret=XZNSNNXG5JEBA1EVC5I1323XNAPEIMF1MZLP0NESTLTGZYEN"
    var url = part1 + location + part2 + type + part3;

$.getJSON(url, function (response){
    $("#results").append("The resturant's name is"+ " " + response.response.venues[0].name +"<br>");
    $("#results").append("The restrurnt's phone is" + " " + response.response.venues[0].contact.phone +"<br>");
    $("#results").append("The restrurnt's address is" + " " + response.response.venues[0].location.address +"<br>");
});
});
});
