// alert("connected")
var userClickedPattern=[];
var gamePattern=[];
var buttonColor=["red","green","blue","yellow"];
var level =0;
var started=false;
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level"+level);
        nextSequence();
        started=true;
    }
});
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
    
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}   

function nextSequence() {
    var userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomnum = Math.floor(Math.random() *4);//generates random number betwenn 0 and 3
    gamePattern.push(buttonColor[randomnum]);
    $("#"+buttonColor[randomnum]).fadeIn(100).fadeOut(100).fadeOut(100).fadeIn(100);
    playSound(buttonColor[randomnum]);
    

}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);

}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        
        if (userClickedPattern.length === gamePattern.length){
  
          
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } 
      else {
        $('body').addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
        console.log("wrong");
        
      }
};


$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");

    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

});