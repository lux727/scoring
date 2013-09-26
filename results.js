var gamer;

var rLoad = function () {
	console.log("resultload");
	gamer = document.getElementById("gameresults");
}

var addLine = function (o) {
	var r = document.createElement("div");
	r.setAttribute("class","resultline");
	r.innerHTML = o.time+","+o.team+","+o.type;
	gamer.appendChild(r);
}