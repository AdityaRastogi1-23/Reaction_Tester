var start;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function move() {
    var left = Math.random() * 300;
    var top = Math.random() * 300;
    var wh = (Math.random() * 400) + 100;

    var shape = document.getElementById("shapes");
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    shape.style.display = "block";
    shape.style.backgroundColor = getRandomColor();

    start = new Date().getTime();
}

move();

document.getElementById("shapes").onclick = function () {
    document.getElementById("shapes").style.display = "none";
    var end = new Date().getTime();
    var time = (end - start) / 1000;
    alert("Your reaction time is " + time.toFixed(2) + " seconds");
    move();
};
