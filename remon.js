<script>   
	var q=new Array(100);
	var a=new Array(100);
	var c1=new Array(100);
	var c2=new Array(100);
	var c3=new Array(100);
	var c4=new Array(100);
	var x;
	var y;
	var z;
function generate(){
for(var i=1;i<=100;i++){
x=Math.floor(1+Math.random()*100);
y=Math.floor(1+Math.random()*100);
z=Math.floor(1+Math.random()*4);
if(z==1){
	q[i]=x+"+"+y+"=";
	a[i]=x+y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y;
}
else if(z==2){
	if(x>y){
	q[i]=x+"-"+y+"=";
	a[i]=x-y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y;
	}
	else{
	q[i]=y+"-"+x+"=";
	a[i]=y-x;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y;
	}
}
else if(z==3){
	q[i]=x+"*"+y+"=";
	a[i]=x*y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y;
}
else{
	q[i]=x+"/"+y+"=";
	a[i]=x/y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y;
}
}
for(i=1;i<=10;i++){
	var w=Math.floor(1+Math.random()*100);
	document.getElementById("question"+i).innerHTML=q[w];
	document.getElementById("choicea"+i).innerHTML="<input type='radio' name='mob' value='A' />"+c1[w]+"<br>";
    document.getElementById("choiceb"+i).innerHTML="<input type='radio' name='mob' value='b' />"+c3[w]+"<br>";
	document.getElementById("choicec"+i).innerHTML="<input type='radio' name='mob' value='c' />"+c4[w]+"<br>";
	document.getElementById("choiced"+i).innerHTML="<input type='radio' name='mob' value='d' />"+c4[w]+"<br>";
}
}
</script>