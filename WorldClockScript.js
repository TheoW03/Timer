
window.onload = function () {
    let daysOfweek=['friday','saturday','sunday','monday','tuesday','wedsenday','thursday'];
    let c = document.getElementById("test");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let c2=document.getElementById('positive');
    let t =  new Date(mm,dd ,yyyy);
    c.innerHTML = "today date: " + mm + '/' + dd + '/' + yyyy;
    c2.innerHTML = "we hope your having a good " + daysOfweek[t.getDay()-1] + "!";

}
function getTime() {

}