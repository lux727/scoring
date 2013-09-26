var teamList = [
	"BU",
	"Emerson",
	"Tufts",
	"QCBoston",
	"Harvard",
	"UMass",
	"IPA",
	"Smith",
	"URI",
	"NSNE",
	"Clark",
	"Badassilisks",
	"McGill"
]

var submitted = false;

var teamddLoad = function () {
	var dd;
	for (var i=1;i<3;i++){
		dd = document.getElementById("t"+i);
		for (var j=0;j<teamList.length;j++){
			var opt = document.createElement("option");
			opt.setAttribute("value",teamList[j]);
			opt.innerHTML = teamList[j];
			dd.appendChild(opt);
		}
	}
}

var resetTeams = function () {
	submitted = true;
	var one = document.getElementById("t1").value;
	var two = document.getElementById("t2").value;
	if (one === two)
		alert("You have chosen the same team!");
	else {
		teams[0].name=one;
		teams[1].name=two;
		teamLoad();
	}
}