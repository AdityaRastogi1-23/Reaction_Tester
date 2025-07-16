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
            var left;
            var top;
            var wh;
            left = Math.random() * 300;
            top = Math.random() * 300; 
            wh = (Math.random() * 400) + 100;

            document.getElementById("shapes").style.left = left + "px";
            document.getElementById("shapes").style.top = top + "px"; 
            document.getElementById("shapes").style.width = wh + "px";
            document.getElementById("shapes").style.height = wh + "px";
            document.getElementById("shapes").style.display = "block";
            document.getElementById("shapes").style.backgroundColor=getRandomColor();
            start = new Date().getTime(); 
        }
        move();
        document.getElementById("shapes").onclick = function () {
            document.getElementById("shapes").style.display = "none";
            var end = new Date().getTime();
            var time = (end - start) / 1000;
            alert(time);
            move();
        }