function getans(){
	var ans1 = document.querySelector('.q1:checked').value;
	var ans2 = document.querySelector('.q2:checked').value;
	var ans3 = document.querySelector('.q3:checked').value;
	var ans4 = document.querySelector('.q4:checked').value;
	var ans5 = document.querySelector('.q5:checked').value;
	if(ans1==1){
		document.getElementById("output1").innerHTML="Correct!";
	}else{
		document.getElementById("output1").innerHTML="Wrong, try again.";
	}
	
	if(ans2==6){
		document.getElementById("output2").innerHTML="Correct!";
	}else{
		document.getElementById("output2").innerHTML="Wrong, try again.";
	}
	
	if(ans3==8){
		document.getElementById("output3").innerHTML="Correct!";
	}else{
		document.getElementById("output3").innerHTML="Wrong, try again.";
	}
	
	if(ans4==11){
		document.getElementById("output4").innerHTML="Correct!";
	}else{
		document.getElementById("output4").innerHTML="Wrong, try again.";
	}
	
	if(ans5==15){
		document.getElementById("output5").innerHTML="Correct!";
	}else{
		document.getElementById("output5").innerHTML="Wrong, try again.";
	}
}
