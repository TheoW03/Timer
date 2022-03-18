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
function stopWatch(){  
    if(!paused){
        if(i == 60){
            i = 0;
        }
        let c = document.getElementById('timer');
        c.innerHTML= + i.toString();
        i++;    //will update
    }else{
        return;
    }
}
var id = setInterval(stopWatch,100);



