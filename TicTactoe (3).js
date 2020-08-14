
let currentPlayer = "x";


let gameStatus = "Game";



const boxes = document.getElementsByClassName("box");
if (timeLeft!= 0) {

for (let i = 0; i < boxes.length; i++) {

  boxes[i].addEventListener("click", function() {

    if (boxes[i].innerHTML.trim() == "" && gameStatus == "Game On") {

      boxes[i].innerHTML = currentPlayer;
      //takeMove();

      currentPlayer = currentPlayer == "x" ? "o" : "x";


      document.getElementById(
        "player"
      ).innerHTML = currentPlayer.toUpperCase();


      if (
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[1].innerHTML == boxes[2].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 1, 2);
      } else if (
        boxes[3].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[5].innerHTML &&
        boxes[3].innerHTML.trim() != ""
      ) {
        showWinner(3, 4, 5);
      } else if (
        boxes[6].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTML == boxes[8].innerHTML &&
        boxes[6].innerHTML.trim() != ""
      ) {
        showWinner(6, 7, 8);
      } else if (
        boxes[0].innerHTML == boxes[3].innerHTML &&
        boxes[3].innerHTML == boxes[6].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 3, 6);
      } else if (
        boxes[1].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[7].innerHTML &&
        boxes[1].innerHTML.trim() != ""
      ) {
        showWinner(1, 4, 7);
      } else if (
        boxes[2].innerHTML == boxes[5].innerHTML &&
        boxes[5].innerHTML == boxes[8].innerHTML &&
        boxes[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 5, 8);
      } else if (
        boxes[0].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[8].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 4, 8);
      } else if (
        boxes[2].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[6].innerHTML &&
        boxes[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 4, 6);
      }else if (
	   (document.getElementsByClassName("box")[0].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[1].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[2].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[3].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[4].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[5].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[6].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[7].innerHTML.length==1) &&
	   (document.getElementsByClassName("box")[8].innerHTML.length==1) ){
	   showDraw();
	  }
    }
  });
}
}
else { for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "#ae8fb6";
    boxes[i].style.color = "black";
  }
  currentPlayer = "x";
  document.getElementById("message").style.display = "none";
  document.getElementById("player").innerHTML = "X";
  gameStatus = "Game On";
}
	
//resets the game
document.getElementById("reset").addEventListener("click", function() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "#dee9ec";
    boxes[i].style.color = "black";
  }
  currentPlayer = "x";
  document.getElementById("message").style.display = "none";
  document.getElementById("player").innerHTML = "X";
  gameStatus = "Game On";
  //  takeMove();
});

//displays the winner
function showWinner(x, y, z) {
  boxes[x].style.background = "#ae8fb6";
  boxes[x].style.color = "white";
  boxes[y].style.background = "#ae8fb6";
  boxes[y].style.color = "white";
  boxes[z].style.background = "#ae8fb6";
  boxes[z].style.color = "white";
  document.getElementById("winner").innerHTML =
    currentPlayer == "x" ? "O" : "X";
  document.getElementById("message").style.display = "block";
  gameStatus = "Game Over";
 
}
//displays the match is draw
function showDraw(){
	document.getElementById("message").style.display = "block";
	document.getElementById("winner").innerHTML  = "No";
	gameStatus = "Game Over";
	
}
var timer;
var button;
var timeLeft;
var label;
function countdown() {
  if (timeLeft) {
	  if(gameStatus=="Game Over")
    {

      label.innerHTML= "";
      return;
    }
	 
	  //timeLeft = 10;
    label.innerHTML = timeLeft;
    timeLeft--;
    timer = setTimeout(countdown, 1000);
  } else {
	  //timeLeft = 0 ;
   label.innerHTML = "fail" ;
   
    timer = undefined;
    
    reset();
    gameStatus ="Game Over"
    
  }
}

function takeMove() {

  gameStatus = "Game On";
  if((document.getElementsByClassName("box")[0].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[1].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[2].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[3].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[4].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[5].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[6].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[7].innerHTML.length==0) &&
	   (document.getElementsByClassName("box")[8].innerHTML.length==0) &&
	   gameStatus == "Game On"){
  if (typeof(timer) === "undefined") {
   button.innerHTML = "reset";
  // document.getElementById("reset").addEventListener("click",function(){
   timeLeft = 10;
   countdown();
   } else {
 
    clearTimeout(timer);
    timeLeft = 10;
    
    countdown();
  }
  }
}

function reset()
{
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "#dee9ec";
    boxes[i].style.color = "black";
  }
  currentPlayer = "x";
  document.getElementById("message").style.display = "none";
  document.getElementById("player").innerHTML = "X";
  gameStatus = "Game Over";
  timeLeft =0;
  label.innerHTML = "" ;
  //countdown();
}

function init() {
  button = document.getElementById("reset");
  button2 = document.getElementById("move");
  label = document.getElementById("label");
  button.addEventListener("click", reset);
  button2.addEventListener("click", takeMove);
}
document.addEventListener("DOMContentLoaded", init, false);