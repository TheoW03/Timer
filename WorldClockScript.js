var local = new Date().toLocaleTimeString();

window.onload = function () {
    let daysOfweek = ['friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wedsenday', 'thursday'];
    let c = document.getElementById("test");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let c2 = document.getElementById('positive');
    let c3 = document.getElementById('localTime');
    let t = new Date(mm, dd, yyyy);
    c.innerHTML = "today date: " + mm + '/' + dd + '/' + yyyy;
    c2.innerHTML = "we hope your having a good " + daysOfweek[t.getDay() - 1] + "!";
    setInterval(getTime, 1000);
    let me = document.getElementById('mes');
    if (local.includes("AM")) {
        me.innerHTML = "Good morning";
    }else if(Integer.parseInt(local.charAt(0)) == 12){
        me.innerHTML = "Good its noon. enjoy your lunch/tea";
    
    }else if(Integer.parseInt(local.charAt(0)) >= 1 && Integer.parseInt(local.charAt(0)) <= 5 ){
        me.innerHTML = "good afternoon";
    } 
    else {
        me.innerHTML = "good evening";
    }
    c3.innerHTML = "Clock: " + local;


}
function getTime() {
    let me = document.getElementById('mes');
    let c3 = document.getElementById('localTime');
    if (local.includes("AM")) {
        me.innerHTML = "Good morning";
    }else if(Integer.parseInt(local.charAt(0)) == 12){
        me.innerHTML = "Good its noon. enjoy your lunch/tea";
    
    }else if(Integer.parseInt(local.charAt(0)) >= 1 && Integer.parseInt(local.charAt(0)) <= 5 ){
        me.innerHTML = "good afternoon";
    } else {
        me.innerHTML = "good evening";
    }

    local = "Clock: " + new Date().toLocaleTimeString();
    c3.innerHTML = local;

}