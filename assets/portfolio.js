// https://github.com/mermaid-js/mermaid/issues/5676 BUGS for display:none parametrs !!!!!!!!!!!!!!!!
//  DONT USE BEACAUSE display:none dont worked


// Native
function actions(evt, contentName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.position = "absolute";
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.left = "-9000px";
        tabcontent[i].style.transform = "scale(0)";
        tabcontent[i].style.animation = "fadeEffect 1.5s";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(contentName).style.position = "unset";
    document.getElementById(contentName).style = "1";
    document.getElementById(contentName).style.left = "9000px";
    document.getElementById(contentName).style.transform = "scale(1)";
    document.getElementById(contentName).style.animation = "fadeEffect 1.5s";
    contentName == "minusta" ? document.getElementById(contentName).style.backdropFilter = "blur(20px)" : document.getElementById(contentName).style.backdropFilter = "blur(0px)";

    fadeIn(contentName, 200)
    evt.currentTarget.className += " active";

}

// JQuery
window.onload = function() {

    $.each($("[id].tabcontent"), function(key, elem) {
        elem.style.position = "absolute";
        elem.style.opacity = "0";
        elem.style.left = "-9000px";
        elem.style.transform = "scale(0)";
    });

    actions(event, 'kotiin')

    $("#foto").click("click", function() {
        document
            .exitFullscreen()
    })
}

//for animation open to new tab
function fadeIn(id, speed) {
    el = document.getElementById(id)
    var step = 1 / speed;
    var interval = setInterval(function() {
        if (+el.style.opacity >= 1)
            clearInterval(interval);

        el.style.opacity = +el.style.opacity + step;
    }, speed / 1000);
}

// for foto exit