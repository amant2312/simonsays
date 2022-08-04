var buttonColor=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

var level=0;
var started=false;
var currentLevel;

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


$(document).keypress(function() {

  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    // $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});




function nextSequence(){
    userClickedPattern=[];
    
    $("#level-title").text("Level " + level);
    level++;

    var randomNumber=Math.random();
    randomNumber=Math.floor(randomNumber*4);
    var randomChosenColour=buttonColor[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    
    
    
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      console.log("correct");
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }
    }
    else{
      
      $("#level-title").text("Game Over Press any key to Start" );
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $('body').addClass("game-over");

      setTimeout(function () {
      $('body').removeClass("game-over");
      }, 200);
      startOver();


    }
    
}




function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor){
  $("#" + currentColor).addClass('pressed');

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
  
    function startOver(){
      started=false;
      level=0;
      gamePattern=[];
      userClickedPattern=[];
      
    }








// while(JSON.stringify(gamePattern)==JSON.stringify(userPatter)  )
// {
//     var randomChosenNumber = getRandomInt(4);
    
//     $("buttonColor[randomChosenColour]").addClass("pressed");

//     gamePattern.push(buttonColor[randomChosenColour]);

//     // $("buttonColor[randomChosenColour]").removeClass("pressed");
//     // var audio=new Audio('sounds/crash.mp3');
//     // audio.play();




    
// }


// $("h1").addClass("big-tittle");

// $(document).click(function(){

//     var button=this.buttonColor;
//     switch(button){
//         case 'red':
//             userPattern.push("red");
//             break;

//             case 'green':
//                 userPattern.push("green");
//                 break;

//                 case 'yellow':
//                     userPattern.push("yellow");
//                     break;


//                     case 'blue':
//                         userPattern.push("blue");
//                         break;
                
//     }

    
// })