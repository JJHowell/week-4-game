$( document ).ready(function(){
var randomnum=Math.floor(Math.random()*101+19)
console.log(randomnum);

$('#randomNumber').html(randomnum);
console.log(randomnum);



var playerScore= 0;
var wins= 0;
var losses = 0;
var endOfGame =false;
var playerLoses=false;


$('#wins').html(wins);
$('#losses').html(losses);


$('#blue').on ('click', function(){
if (endOfGame == false)
{
var blue= Math.floor(Math.random()*11+1);
playerScore = playerScore + blue;
$('#playerScore').html(playerScore);
checkScore();
}


})


$('#green').on ('click', function(){
if (endOfGame == false)
{
var green= Math.floor(Math.random()*11+1);
playerScore = playerScore + green;
$('#playerScore').html(playerScore);
checkScore();
}

})


$('#pink').on ('click', function(){
if (endOfGame == false)
{
var pink= Math.floor(Math.random()*11+1);
playerScore = playerScore + pink;
$('#playerScore').html(playerScore);

checkScore();
}

})


$('#white').on ('click', function(){
if (endOfGame == false)
{
var white= Math.floor(Math.random()*11+1);
playerScore= playerScore + white;
$('#playerScore').html(playerScore);

checkScore();
}
})


function checkScore(){
if (playerScore == randomnum){
endOfGame=true;
wins++;
$('#playerScore').html(playerScore);
$('#wins').html(wins);
alert("Game Over, You Win");

}


else if (playerScore > randomnum){
Playerloses = true;
endOfGame = true;
losses++;
$('#losses').html(losses);
alert("Game Over, You lose");

};

if (endOfGame){
$('#wins').html( wins);
$('#losses').html(losses);
setTimeout(startgame,2500);
}
}


function startgame(){
endOfGame = false;
playLoses = false;
playerScore = 0
randomnum = Math.floor(Math.random() * (120 - 19)) + 19;
$('#randomNumber').text(randomnum);

var red = Math.floor(Math.random() * (12-1)) + 1;
var blue = Math.floor(Math.random() * (12-1)) + 1;
var yellow= Math.floor(Math.random() * (12-1)) + 1;
var green= Math.floor(Math.random() * (12-1)) + 1;

$('#playerScore').html(playerScore);
$('#randnum').html(randomnum);
$('#wins').html(wins);
$('#losses').html(losses);
}
});