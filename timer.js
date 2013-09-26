var time = -1;
var timer; 

var timerLoad = function () {
	console.log("timerLoad");
	timer = document.getElementById("timer");

	var minute = document.createElement("span");
	minute.setAttribute("id","minute");
	timer.appendChild(minute);

	var colon = document.createElement("span");
	colon.innerHTML = ":";
	timer.appendChild(colon);

	var second = document.createElement("span");
	second.setAttribute("id","second");
	timer.appendChild(second);

	increment();
}

var t;

var startTime = function () {
	if (submitted)
		t=setInterval(increment,1000);
	else
		alert("please submit teams");
}

var increment = function () {
	time++;
	document.getElementById("minute").innerHTML=Math.floor(time/60);
	var s = time %60;
	if (s<10)
		document.getElementById("second").innerHTML = "0"+s;
	else
		document.getElementById("second").innerHTML = s;
}

var stopTime = function (){
	clearInterval(t);
}

var resetTime = function(){
	submitted = false;
	clearInterval(t);
	document.getElementById("gameresults").innerHTML="";
	time = -1;
	teamLoad();
	increment();
}