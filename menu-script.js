$(document).ready(function () {
    $("#menu > a").mouseenter(function () {
      $(this).css("color", "white");
      $(this).css("border", "solid 1px white");
      $(this).css("background-color", "rgb(34, 46, 25)");

    });
    $("#menu > a").mouseleave(function () {
      $(this).css("color", "black");
      $(this).css("border", "solid 1px black");
      $(this).css("background-color", "rgb(67, 88, 51)");
    });
  });