

$(document).ready(function(){

//User registering

    function setCookie(cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie ="ResterauntID=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var ID = getCookie("ResterauntID");
    if (ID != "") {
        console.log("No Visisted Resteraunts")
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("ResterauntID", user);
        }
    }
}

  });