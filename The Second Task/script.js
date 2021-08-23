let changeBgColor = function() {
    var color = document.getElementById("selectColor").value;
    document.querySelector(".envelope").style.backgroundColor = color;
    document.body.style.background = color;
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = `.envelope:before, .envelope:after {background: ${color};}`;
}