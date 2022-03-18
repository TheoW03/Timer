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
