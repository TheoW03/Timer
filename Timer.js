var i = 0;
var mins = 0;
var hours = 0;
let paused=true;


function start(){
    paused=false;
}
function stop(){
    paused=true;
}
function time(){  
    if(!paused){
        if(i == 60){
            i = 0;
            mins++;
        }
        if(hours == 60){
            mins = 0;
            hours++;
        }
        let c = document.getElementById('timer');
        if(i < 10){
            c.innerHTML= mins.toString() +":0"+ i.toString();
        }else{
            c.innerHTML= mins.toString() +": "+ i.toString();
        }
        
        clicks=0;
        i++;    
    }else{
        return;
    }
}
var id = setInterval(time,100);


