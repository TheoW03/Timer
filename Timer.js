// import {timerr} from "./TimerClass.js";
//  function showNotification() {
//     const notification = new Notification("New message incoming", {
//        body: "your timer is up!!!"    
//     });
//     alert("called")
//  }
//  window.onload = function(){
//     if (Notification.permission !== "denied") {
//         alert("turn notifications on");
//         Notification.requestPermission().then(permission => {

//         });
//     }
//     showNotification();

// }
window.onload = function () {
    document.getElementById("stopSound").hidden = true;
}
var paused = true;
var secs;
var hours;
var mins;
var minsId;
var secsId;
var hoursId;
var startThisUP = true;
var soundExists = false;
function inputHours() {

}
function inputMins() {

}
function inputSecs() {

}

function getCalc() {

}
function startTimers() {
    // if (startThisUP) {
        hoursId = document.getElementById("hours");
        minsId = document.getElementById("mins");
        secsId = document.getElementById("seconds");
        hours = hoursId.value;
        if (hours == null || hours < 0) {
            hours = 0;
        }
        
        mins = minsId.value;
        if (mins == null || mins < 0) {
            mins = 0;
        }
        if(mins > 60){
            // mins = mins%60;
            // mins = parseInt(hours+ Math.floor(mins/60));
            // alert(typeof(mins))
            // mins = mins%60;
        }
        secs = secsId.value;
        if (secs == null || secs < 0) {
            secs = 0;
        }
        if(secs > 60){
            mins = parseInt(mins);
            secs = parseInt(secs);
            mins = parseInt(Math.floor(secs/60));
            secs = parseInt(secs%60);
        }
        startThisUP = false;
    // }else{
        // hours=hours;
        // mins=mins;
        // secs=secs;
    // }
    paused = false;
}
function stopT() {
    hoursId.value= hours;
    minsId.value = mins;
    secsId.value = secs;
    paused = true;
}
var zeroedOut = false;
function addZero(num) {
    if (num < 10) {
        return "0" + num.toString();
    } else {
        return num.toString();
    }
}

function timer() {
    if (!paused) {
        hoursId.disabled = true;
        minsId.disabled = true;
        secsId.disabled = true;

        let c = document.getElementById("timerL");

        if (secs < 0) {
            secs = 59;
            mins--;
            if (mins < 0) {
                secs = 0;
            }

        }
        if (mins < 0) {
            hours--;
            mins = 59;
            if (hours < 0) {
                mins = 0;
            }
        }
        if (hours < 0) {
            hours = 0;
            mins = 0;
        }
        if (hours == 0 && mins == 0 && secs == 0) {
            // showNotification();
            const soundEffect = new Audio();
            soundEffect.src = 'timerUp.mp3';
            // soundEffect.play();
            document.getElementById("stopSound").hidden = false;
            paused = true;
            soundExists = true;
        }

        c.innerHTML = addZero(hours) + ":" + addZero(mins) + ":" + addZero(secs);
        secs--;


    } else if (soundExists) {
        return;
    } else {
        hoursId.disabled = false;
        minsId.disabled = false;
        secsId.disabled = false;
        return;
    }
}
function stopSound() {
    document.getElementById("stopSound").hidden = true;
    soundExists=false;
    hoursId.disabled = false;
    minsId.disabled = false;
    secsId.disabled = false;

}
var id = setInterval(timer, 1000);
