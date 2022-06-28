
var storePages;
var cityAndPlace;
/**
 * 
 * @param {*page} page store page in local storage 
 */
function storePage(page) {
    storePages = page;
    localStorage.setItem("backPage", page);
}
/**
 * retrives for use 
 */
function backButton() {
    try {
        let c = document.getElementById("back");
        storePages = localStorage.getItem('backPage');
        c.href = storePages;
    } catch (error) {

    }

}
