<script>]
function generate(){
	var counter_correct=0;
	var counter_wrong=0;
for(var i=1;i<=100;i++){
var x=Math.floor(1+Math.random()*10000);
var y=Math.floor(1+Math.random()*10000);
var q+"i";
var z=Math.floor(1+Math.random()*4);
if(z==1){
	q+"i"=x+y;
document.getElementById(question+"i").innerHTML=x+"+"+y+"=";
}
else if(z==2){
	if(x>y){
		document.getElementById(question+"i").innerHTML=x+"-"+y+"=";
		var answer = parseInt(document.getElementById(answer+"i").value);
		q+"i"=x-y;
		if(q+"i"==answer){
			counter_correct++;
		}
		else{
			counter_wrong++;
		}
	}
	else{
		var answer = parseInt(document.getElementById(question+"i").innerHTML=x"-"y+"=";
		q+"i"=y-x;
		if(q+"i"==answer){
			counter_correct++;
		}
		else{
			counter_wrong++;
		}
	}
}
else if(z==3){
	var answer = parseInt(document.getElementById(question+"i").innerHTML=x+"*"y+"=";
		q+"i"=x*y;
		if(q+"i"==answer){
			counter_correct++;
		}
		else{
			counter_wrong++;
		}
}
else{
	var answer = parseInt(document.getElementById(question+"i").innerHTML=x+"/"y+"=";
		q+"i"=x/y;
		if(q+"i"==answer){
			counter_correct++;
		}
		else{
			counter_wrong++;
		}
}
}
}
</script>