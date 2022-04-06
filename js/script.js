function init(){
//add your javascrip between these two lines of code
function alertFunction() {
        var txt = document.getElementById("entryinput").value;
        alert("Jie Ren:" + txt);
        document.getElementById("textoutput").innerHTML = txt
    }
    var button = document.getElementById('entrybutton');
    button.addEventListener('click', alertFunction);

}

window.addEventListener('load', init);
