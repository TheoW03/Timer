var paused=true;

var hours=0;
var mins=0;
var secs=0;
var timerAsS=""
function inputHours(){

}
function inputMins(){

}
function inputSecs(){

}

function getCalc(){

}
function start(){
    paused=false;
}
function stop(){
    paused=true;
}

function timer(){  
    if(!paused){

    }else{
        return;
    }
}
var id = setInterval(timer,1000);