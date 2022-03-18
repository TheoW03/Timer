var miliSeconds = 0;
var secs = 0;
var mins = 0;
var hours = 0;
let paused=true;
var Lap="";

function start(){
    paused=false;
}
function stop(){
    paused=true;
}
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

        c.innerHTML=  mins.toString() +": 0" + secs.toString() +": 0" + miliSeconds.toString();
        Lap = mins.toString() +": 0" + secs.toString() +": 0" + miliSeconds.toString();
        miliSeconds++;    //will update
    }else{
        return;
    }
}
/**
 * this is lab 
 * code later
 */
var id = setInterval(stopWatch,100);
function lap(){
    let c = document.getElementById('laps');
    c.innerHTML = Lap;
    stop();
}


