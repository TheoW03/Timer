var miliSeconds = 0;
var secs = 0;
var mins = 0;
var hours = 0;
let paused=true;
var Lap="";
var pressedLap=false;
var laps=[];
var lapIndex = 0;

function start(){
    if(pressedLap){
        let c = document.getElementById('timer');
        c.innerHTML="00:00:00:00"
        miliSeconds=0;
        secs=0;
        mins=0;
        hours=0;
        pressedLap=false;
    }
    paused=false;
}
function stop(){
    paused=true;
}

/**
 * 
 * @returns returns nothing
 * 
 */
function stopWatch(){  
    if(!paused){
        //checks time if needs to be 0
        if(miliSeconds == 10){
            miliSeconds = 0;
            secs++;
        }
        if(secs == 60){
            secs=0;
            mins++;
        }
        if(mins == 60){
            mins = 0;
            hours++;
        }
        //string
        let SecsString = "";
        if(secs < 10){
            SecsString += "0";
        }
        let minsString = "";
        if(mins < 10){
            minsString += "0";
        }
        let hoursString = "";
        if(hours < 10){
            hoursString += "0";
        }
        //adding to Srting
        hoursString += hours.toString();
        SecsString += secs.toString();
        minsString += mins.toString();
        //implementation on webseite
        let t =  hoursString + ":"+ minsString + ":" + SecsString +":0"+ miliSeconds.toString();
        let c = document.getElementById('timer');
        c.innerHTML = t;
        Lap = t; 
        miliSeconds++;
    }else{
        return;
    }
}

/**
 * this is lap
 * code later
 */
var id = setInterval(stopWatch,100);
function lap(){
    let c = document.getElementById('laps');
    let t = "";
    laps[lapIndex] = Lap;
    let i = 0;
    let lapWeb= laps.map(x => x + t);
    c.innerHTML = lapWeb.toString().split(',').join('<br>');
    lapIndex++;
    stop();
}
/**
 * reset event
 */
function resetT(){
    let c = document.getElementById('timer');
    c.innerHTML="00:00:00:00"
    miliSeconds=0;
    secs=0;
    mins=0;
    hours=0;
    pressedLap=false;
    paused=true;
}
