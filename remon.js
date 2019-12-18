<script>
function generate(){
	var q=new Array[100];
	var a=new Array[100];
	var c1=new Array[100];
	var c2=new Array[100];
	var c3=new Array[100];
	var c4=new Array[100];
for(var i=1;i<=100;i++){
var x=Math.floor(1+Math.random()*10000);
var y=Math.floor(1+Math.random()*10000);
var z=Math.floor(1+Math.random()*4);
if(z==1){
	x[i]=x+"+"+y+"=";
	a[i]=x+y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y
}
else if(z==2){
	if(x>y){
	x[i]=x+"-"+y+"=";
	a[i]=x-y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y
	}
	else{
	x[i]=y+"-"+x+"=";
	a[i]=y-x;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y
	}
}
else if(z==3){
	x[i]=x+"*"+y+"=";
	a[i]=x*y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y
}
else{
	x[i]=x+"/"+y+"=";
	a[i]=x/y;
	c1[i]=a[i];
	c2[i]=a[i]+x;
	c3[i]=a[i]+y;
    c4[i]=a[i]+x+y
}
}
}
</script>