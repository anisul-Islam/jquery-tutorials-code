// 1. html selector and text manipulation
// using js
//  document.querySelector("h2").innerHTML = "hello";

// using jquery for selecting and changing text
// $("h2").text("hello");

$(".my-div h2").text("bye");

// we can select multiple elements
$("#para1, h1").text("changed text of paragraph");

$("#para1").html("<strong>hello i am strong paragraph</strong>");
$("#para1").prepend("starting");
$("#para1").append("ending");

// before, after for adding new elements
var para2 = $("<p></p>").text("this is paragraph 2");
// $("#para1").after(para2);
$("#para1").before(para2);

// 2. attribute manipulation using jquery
var attributeValue = $("a").attr("href");
console.log(attributeValue);

$("a").attr("href", "https://www.studywithanis.com");
$("a").removeAttr("target");

// 3. css manipulate
$("h1").css("color", "tomato");

$("h2").css({ color: "green", "font-style": "italic" });

$("a").addClass("link-style");

// 4. event listener
$(".mybtn").click(function () {
  var value = this.innerHTML;
  $("#result").text(value + " is selected");
});

$(".mybtn").mouseover(function () {
  var value = this.innerHTML;
  $("#result").text(value + " is overed by mouse");
});

// 5. animation

// 6.
$(".demo2").parent().css("background-color", "green");
$(".my-div").children().css("color", "white");

// $("ol li:nth-child(2)").css("color", "green");
// $("ol li:nth-child(3)").css("color", "green");

$("ol li:odd").css("color", "green");
// $("ol li:even").css("color", "green");

$("body").addClass("animated hinge");

/*

  css()
  prop()
  remove()
  appendTo()
  clone().appendTo()
  parent().css()
  child().css()
  addClass()


*/
