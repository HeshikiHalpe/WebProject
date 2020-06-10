function Match() {
	var a = document.getElementById("passwd").value;
	var b = document.getElementById("pw").value;
	
	if( a == b ){
		alert("Matched");
	}
	else {
		alert("Miss matched");
		return false;
	}
}

function Check() {
	if(document.getElementById("check").checked) {
		document.getElementById("submission").disabled = false;
	}
	else {
		document.getElementById("submission").disabled = true;
	}
}

function Check2() {
	if((document.getElementById("checko").checked) && (document.getElementById("checkt").checked)){
		document.getElementById("submission").disabled = false;
	}
	else {
		document.getElementById("submission").disabled = true;
	}
}

