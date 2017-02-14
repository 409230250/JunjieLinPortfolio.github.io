//
// test_script.js
// INF133: Midterm Assignment
// Coded by Junjie Lin(id:25792830), November 2015
//
var swtich = false;
$(document).ready(function() {
	$(".light").click(function(){
		if(swtich == false) {
			$(".light").attr("src", "img/on.jpg");
			swtich = true;
		}
		else {
			$(".light").attr("src", "img/off.jpg");
			swtich = false;
		}
	});
});
$(document).ready(function() {
	$(".circle").click(function(){
		$(".circle").effect( "shake", { direction: "right", times: 5, distance: 45}, 3000 );
	});
});
/*
function SwitchOn() {
	document.images[0].src = "img/on.jpg";
}

function SwitchOff() {
	document.images[0].src = "img/off.jpg";
}
*/