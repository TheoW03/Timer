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
        if(miliSeconds == 10){
            miliSeconds = 0;
            secs++;
        }
        if(secs == 60){
            secs=0;
            mins++;
        }
        let c = document.getElementById('timer');

        c.innerHTML=  mins.toString() +":0" + secs.toString() +":0" + miliSeconds.toString();
        Lap = mins.toString() +":0" + secs.toString() +":0" + miliSeconds.toString();  //saves lab 
        miliSeconds++;    //will update
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


