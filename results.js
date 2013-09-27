var gamer;

var rLoad = function () {
	console.log("resultload");
	gamer = document.getElementById("gameresults");
}

var addLine = function (o) {
	var r = document.createElement("div");
	r.setAttribute("class","resultline");
	r.innerHTML = Math.floor(o.time/60)+":";
	var s = o.time%60;
	if (s<10)
		r.innerHTML += "0"+s+","+o.team+","+o.type;
	else
		r.innerHTML += s+","+o.team+","+o.type;
	console.log(r.innerHTML);
	gamer.appendChild(r);
}