var miliSeconds = 0;
var secs = 0;
var mins = 0;
var hours = 0;
let paused = true;
var Lap = "";
var pressedLap = false;
var laps = [];
var lapIndex = 0;

function start() {
    document.getElementById("starts").disabled = true;
    document.getElementById("stops").disabled = false;
    document.getElementById("Laps").disabled = false;


    if (pressedLap) {
        let c = document.getElementById('timer');
        c.innerHTML = "00:00:00:00";
        miliSeconds = 0;
        secs = 0;
        mins = 0;
        hours = 0;
        pressedLap = false;
    }
    paused = false;

}
function stop() {
    document.getElementById("starts").disabled = false;
    document.getElementById("Laps").disabled = true;
    document.getElementById("stops").disabled = true;
    paused = true;
}

/**
 * 
 * @param {timerNum} num this is the number you want to attach 0 too 
 * @returns 1 = 01|10 = 10
 */
 function addZero(num){
    if(num < 10){
        return "0"+num.toString();
    }else{
        return num.toString();
    }
}
/**
 * 
 * sets HTML
 */
function stopWatch() {
    if (!paused) {
        //checks time if needs to be 0
        if (miliSeconds >= 10) {
            miliSeconds = 0;
            secs++;
        }
        if (secs >= 60) {
            secs = 0;
            mins++;
        }
        if (mins >= 60) {
            mins = 0;
            hours++;
        }
        //website
        let t = addZero(hours) + ":" + addZero(mins) + ":" + addZero(secs) + ":" + addZero(miliSeconds);
        document.getElementById('timer').innerHTML = t;
        Lap = t;
        miliSeconds++;
    } 
}

/**
 * this is lap
 * code later
 */
var id = setInterval(stopWatch, 100);
function lap() {
    let c = document.getElementById('laps');
    let t = "";
    laps[lapIndex] = (lapIndex+1).toString() +". " +Lap;
    let i = 0;
    let lapWeb = laps.map(x => x + t);
    c.innerHTML = lapWeb.toString().split(',').join('<br>');
    lapIndex++;
    document.getElementById("Laps").disabled = true;
    pressedLap = true;
    stop();

}
/**
 * reset event
 */
function resetT() {
    let c = document.getElementById('timer');
    document.getElementById("starts").disabled = false;
    document.getElementById("Laps").disabled = false;
    document.getElementById("stops").disabled = false;
    document.getElementById('laps').innerHTML = "nothing lapped at the moment";
    laps=[];
    c.innerHTML = "00:00:00:00"
    miliSeconds = 0;
    secs = 0;
    mins = 0;
    hours = 0;
    lapIndex=0;
    pressedLap = false;
    paused = true;
}
