// https://github.com/mermaid-js/mermaid/issues/5676 BUGS for display:none parametrs
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
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(contentName).style.position = "unset";
    document.getElementById(contentName).style.opacity = "1";
    document.getElementById(contentName).style.left = "9000px";
    document.getElementById(contentName).style.transform = "scale(1)";

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

}

// function actions(evt, contentName) {
//     $("[id]").visibility("hidden");

//     $(`#${contentName}`).show()
// }