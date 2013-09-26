var teams = [{
	name: "Team 1",
	score: -1
	},{
	name: "Team 2",
	score: -1	
	}
]

var team1;
var team2;

var teamLoad = function () {
	for (var i=1;i<3;i++){
		teams[i-1].score = -1;
		document.getElementById("n"+i).innerHTML = teams[i-1].name;
		goal(i);
	}
}

var goal = function (team) {
	teams[team-1].score++;
	document.getElementById("s"+team).innerHTML = teams[team-1].score*10;
	if (time > 0) {
		var obj = {
			time: time,
			team: teams[team-1].name,
			type: 'Goal'
		}
		addLine(obj);
	}
}

var injury = function (team) {
	stopTime();
	var obj = {
		time:time,
		team:teams[team-1].name,
		type: 'Injury'
	}
	addLine(obj);
}

var yellow = function (team) {
	stopTime();
	var obj = {
		time:time,
		team:teams[team-1].name,
		type: 'Yellow Card'
	}
	addLine(obj);
}

var red = function (team) {
	stopTime();
	var obj = {
		time:time,
		team:teams[team-1].name,
		type: 'Red Card'
	}
	addLine(obj);
} 

var snatch = function (team) {
	stopTime();
	teams[team-1].score += 3;
	document.getElementById("s"+team).innerHTML = teams[team-1].score*10;
	var obj = {
		time:time,
		team:teams[team-1].name,
		type: 'Snitch Snatch!'
	}
	addLine(obj);
}