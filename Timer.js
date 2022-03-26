 // import {timerr} from "./TimerClass.js";

var paused = true;
var secs;
var hours;
var mins;
var minsId;
var secsId;
var hoursId;
var startThisUP = true;
function inputHours() {

}
function inputMins() {

}
function inputSecs() {

}

function getCalc() {

}
function startTimers() {
    if(startThisUP){
        hoursId = document.getElementById("hours");
        minsId = document.getElementById("mins");
        secsId = document.getElementById("seconds");
        hours = hoursId.value;
        if(hours == null){
            hours = 0;
        }
        mins = minsId.value;
        if(mins == null){
            mins = 0;
        }
        secs = secsId.value;
        if(secs == null){
            secs = 0;
        }
        startThisUP=false;
    }
    paused = false;
}
function stopT() {
    paused = true;
}
var zeroedOut = false;

function timer() {
    if (!paused) {
        hoursId.disabled=true;
        minsId.disabled=true;
        secsId.disabled=true;
        let c = document.getElementById("timerL");
     
        if (secs < 0) {
            secs = 59;
            mins--;
            if(mins < 0){
                secs=0;
            }
            
        }
        if(mins < 0){
            hours--;
            mins=59;
            if(hours < 0){
                mins=0;
            }
        }
        if(hours < 0){
            hours = 0;
            mins=0;
        }
        c.innerHTML = hours.toString() +":"+mins.toString()+":"+ secs.toString()
        secs--;

    } else {
        return;
    }
}
var id = setInterval(timer, 100);
