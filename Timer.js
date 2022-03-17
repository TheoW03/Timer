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
        }
        let c = document.getElementById('timer');
        c.innerHTML= + i.toString();
        i++;    //will update
    }else{
        return;
    }
}
var id = setInterval(time,100);


var storePage=""
function storePage(page){
    storePage= page
}
function backButton(){
    let c = document.getElementById("back");
    c.href=page
    
}
function getHref(){
    return storePage;
}
