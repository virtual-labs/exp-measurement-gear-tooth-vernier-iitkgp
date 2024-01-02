
/// This dw_tester.js file is developped by,
///Piyali Chattopadhyay
///Project_scientist- Technical
///Virtual Lab Projects,Mechanical Engineering Department,IIT Kharagpur


$(document).ready(function(){
  $("#instcontrol").click(function(){
    $("#inst").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#myTables").click(function(){	
	
    var ipvalue = $("#seudobox").val();
	if(ipvalue == 1){
    $("#obsTable1").slideToggle("slow");
	}
	
  else if(ipvalue == 2){
    $("#obsTable2").slideToggle("slow");
  }
	});
	
 
  });

function seudovalue1(){
	
$('#seudobox').val(1);	
	
}

function seudovalue2(){
	
$('#seudobox').val(2);	
	
}

///move slipgauge
function moveGauge(){
	
	var movebox = document.getElementById('movechk').value;
		
	if(movebox == 1){	
document.getElementById('mmgauge').style.left = 11 + "%";
document.getElementById('mmgauge').style.top = 80.5 + "%";
document.getElementById('movechk').value = 2;
}
if(movebox == 2){	
document.getElementById('mmgauge').style.left = 78 + "%";
document.getElementById('mmgauge').style.top = 99.5 + "%";
document.getElementById('movechk').value = 1;
}
}

///move gear for exp1

function moveGear(){
//mjhPos = true;
var movebox = document.getElementById('movechk2').value;
		
	if(movebox == 1){		
document.getElementById('gear').style.left = -20 + "%";
document.getElementById('gear').style.top = 78.3 + "%";
document.getElementById('movechk2').value = 2;
document.getElementById('chkgear').value = 2;
}
if(movebox == 2){
document.getElementById('gear').style.left = 5 + "%";
document.getElementById('gear').style.top = 91.5 + "%";
document.getElementById('movechk2').value = 1;
document.getElementById('chkgear').value = 1;
}
}
///move gear for exp2

function moveGear2(){
//mjhPos = true;
var movebox = document.getElementById('movechk2').value;
		
	if(movebox == 1){		
document.getElementById('gear2').style.left = 4.7 + "%";
document.getElementById('gear2').style.top = 52.3 + "%";
document.getElementById('gear2').style.width = 53 + "%";
document.getElementById('movechk2').value = 2;
document.getElementById('chkgear').value = 2;
}
if(movebox == 2){
document.getElementById('gear2').style.left = 5 + "%";
document.getElementById('gear2').style.top = 91.5 + "%";
document.getElementById('gear2').style.width = 70 + "%";
document.getElementById('movechk2').value = 1;
document.getElementById('chkgear').value = 1;
}
}

///Gear rotation
var angle = 0;
function rotateGear(){
	
	angle++;
	var deg = angle*4;
	//alert(deg);
	if(document.getElementById('seudobox').value == 1){ 
	var obj = document.getElementById('gear');
	}
else if(document.getElementById('seudobox').value == 2){ 
	var obj = document.getElementById('gear2');
	}
	obj.style.transform ="rotate("+deg+"deg)";
	obj.style.transformOrigin ="49.8% 51%";
   /* document.getElementById('Ea').stepUp(1);
   document.getElementById('motor_arm_voltage').stepUp(1); */
   
   /* if( deg>120){
	alert('This is the highest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('Ea').value ="0";
	angle=0;
	return;
   } */
    
 }
 function rotateGearRev(){
	
	angle--;
	var deg = angle*4;
	//alert(deg);
	if(document.getElementById('seudobox').value == 1){ 
	var obj = document.getElementById('gear');
	}
else if(document.getElementById('seudobox').value == 2){ 
	var obj = document.getElementById('gear2');
	}	
	obj.style.transform = "rotate("+deg+"deg)";
	obj.style.transformOrigin ="49.8% 51%";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	/* document.getElementById('Ea').stepDown(1);
   document.getElementById('motor_arm_voltage').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('Ea').value ="0";
	angle=0;
	return;
   } */
 }
    
///move horizontal scale jaw
var pos = 15;
 var counter = 0,keepcount=0;
 function horijawright(){
	 
	counter+=0.5; 
	keepcount+=0.5;
	
	var newPos = math.add(pos,counter);
	//var newPos2 = math.add(pos,keepcount);
	
	document.getElementById('mjh').style.left = newPos + "%";
	
	
	 if(document.getElementById('chkgear').value == 1 || document.getElementById('movechk').value == 1  ){
		counter = keepcount;
		counter-= 0.5;
		
	}
 }
 
 function horijawleft(){
	 
	counter-=0.5;
	keepcount-=0.5;
	
	var newPos = math.add(pos,counter);
	//var newPos2 = math.add(pos,keepcount);
	
	document.getElementById('mjh').style.left = newPos + "%";
	
	if(newPos == 16.5 && document.getElementById('movechk').value == 2 ){
		alert('Fixed properly');
		counter = undefined;
		
	}
	else if(document.getElementById('movechk').value == 1 ){
		counter = keepcount;
		counter-= 0.5;
		
	}
	
	if(newPos == 14 && document.getElementById('movechk2').value == 2 ){
		alert('Fixed properly');
		counter = undefined;
		
	}
	else if(document.getElementById('movechk2').value == 1 ){
		counter = keepcount;
		counter-= 0.5;
		
	}
	
 }
 
 ///move vertical scale jaw
var pos2 = 10.2;
var pos3 = 43.2;
 var counter2 = 0,keepcount2=0;
 function verjawdown(){
	 
	counter2+=0.5;
	keepcount2+=0.5;
	
	var newPos = math.add(pos2,counter2);
	var newPos2 = math.add(pos3,counter2);
	
	document.getElementById('mjv').style.top = newPos + "%";
	document.getElementById('mjvprt').style.top = newPos2 + "%";
	
	if(newPos2 >= 43.2 && (document.getElementById('movechk').value == 2 || document.getElementById('movechk2').value == 2)){
		alert('Fixed properly');
		counter2 = undefined;
	}
	else if(document.getElementById('movechk').value == 1 || document.getElementById('movechk2').value == 1){
		
		counter2 = keepcount2;
		counter2+= 0.5;
	}
	 
 }
 
 function verjawup(){
	 
	counter2-=0.5; 
	var newPos = math.add(pos2,counter2);
	var newPos2 = math.add(pos3,counter2);
	
	document.getElementById('mjv').style.top = newPos + "%";
	document.getElementById('mjvprt').style.top = newPos2 + "%";
	
 }

//////animation Flange micrometer clockwise//////
 var p = 0, t=0,q=0, interval, intervalrev,interval2, intervalrev2;
function cw(){
	
const images = ['./images/fm1.png','./images/fm2.png','./images/fm3.png','./images/fm1.png'];
    
	 document.getElementById('cscale').src = images[p];
        p++;
		if(p == images.length){
		 p = 0	;
clearInterval(interval);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }
 function acw(){
	
const images = ['./images/fm1.png','./images/fm3.png','./images/fm2.png','./images/fm1.png'];
    
	 document.getElementById('cscale').src = images[p];
        p++;
		if(p == images.length){
		 p = 0	;
clearInterval(intervalrev);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }
 
 function cw2(){
	
const images = ['./images/fm1.png','./images/fm2.png','./images/fm3.png','./images/fm1.png', './images/fm4.png'];
    
	 document.getElementById('cscale').src = images[q];
        q++;
		if(q == images.length){
		 q = 0	;
clearInterval(interval2);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }
 function acw2(){
	
const images = ['./images/fm1.png','./images/fm3.png','./images/fm2.png','./images/fm1.png','./images/fm4.png'];
    
	 document.getElementById('cscale').src = images[q];
        q++;
		if(q == images.length){
		 q = 0	;
clearInterval(intervalrev2);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }

function rotategauge(){
	
	 interval = setInterval(cw,100);
}

function rotategaugerev(){
	
	 intervalrev = setInterval(acw,100);
}

function rotategauge2(){
	
	 interval2 = setInterval(cw2,100);
}

function rotategaugerev2(){
	
	 intervalrev2 = setInterval(acw2,100);
}

///incr the right position of gauge with 0.7. with one complete revolution circular scale moves 1 mm forward
var posCount = 0;
var posCount2=0;
var gwCount = 0;

var csPos = 16.2;///circular scale right position
var gw = 3;///gatis div width

function cscalePosChng(){

posCount+=0.5;///1.3;for 1 mm exact
posCount2+=0.5;

gwCount+=0.4;

var newPos = math.add(csPos,posCount);
var newgw = math.add(gw,gwCount);

document.getElementById('cscale').style.right = newPos + "%";
//document. getElementById('seudobox').value = newPos;///grap the value of right position of circular scale

document.getElementById('gatis').style.width = newgw + "%";

}
function cscalePosChngRev(){

posCount-=0.5;///1.3;for 1 mm exact
gwCount-= 0.4;

var newPos = math.add(csPos,posCount);
var newgw = math.add(gw,gwCount);

document.getElementById('cscale').style.right = newPos + "%";
//document. getElementById('seudobox').value = newPos;///grap the value of right position of circular scale

document.getElementById('gatis').style.width = newgw + "%";		
	
}


/////////////////////////////////////////
 var screwwidth = 6;
 var counterscru = 0,counterscru2=0;
 function screw_widthincr(){
	 
	counterscru+=0.2;
	counterscru2+=0.2;
	
	var newPos = math.add(screwwidth,counterscru);
	
	document.getElementById('fmmv').style.width = newPos + "%";
	if(newPos == 4.4 && document.getElementById('movechk2').value == 2){
	
	alert('fixed properly');
	counterscru = undefined;
	posCount = undefined;
	rotategauge2();
}

else if(document.getElementById('movechk2').value == 1 || document.getElementById('movechk2').value == 2  ){
		counterscru = counterscru2;
		//counterscru+= 0.2;
		posCount = posCount2;
		rotategauge();
	}
	 
 }
 
 function screw_widthdecr(){
	 
	counterscru-=0.2; 
	var newPos = math.add(screwwidth,counterscru);
	
	document.getElementById('fmmv').style.width = newPos + "%";
	
	 if(newPos == 4.4 && document.getElementById('movechk2').value == 2){
	
	 alert('fixed properly');
	/*counterscru = undefined;
	posCount = undefined; */
	rotategaugerev2();
 }

else if(document.getElementById('movechk2').value == 1 || document.getElementById('movechk2').value == 2){
	 	/* counterscru = counterscru2;
		//counterscru+= 0.2;
		posCount = posCount2; */
		rotategaugerev();
	} 
	 
 }
 
 /* var corewidth = 6.2;
 var counter2 = 0;
 function core_widthincr(){
	 
	counter2+=0.2; 
	var newPos = math.add(corewidth,counter2);
	
	document.getElementById('lvcore').style.width = newPos + "%";
	 
 }
 
 function core_widthdecr(){
	 
	counter2-=0.2; 
	var newPos = math.add(corewidth,counter2);
	
	document.getElementById('lvcore').style.width = newPos + "%";
	
 } */
 
 
 /////////////////////Thickness Count////////////////////////////////////////////
 var thickness,countbox = 0;
 function Math_model1(){
	 
	 var OD = 128;///outer diameter in mm of gear
	 var N = 30;///number of teeth of the spur gear
	 var DP = math.divide(math.add(N,2),OD);///diametral pitch
	 var PCD = math.divide(N,DP);///pitch circle diameter in mm
	 var M = math.divide(1,DP);///module in mm
	 var a = M;///addendum = module
	 
	 var mslc = math.divide(1,40);///main scale least count
     var vslc = math.divide(1,math.multiply(40,25));///vernier scale least count
	 
	 var MS = math.add(9,math.random(-0.05,0.05));///math.add(10,math.multiply(10,math.random(0,0.05)));///main scale reading
	 var VS = math.add(25,math.multiply(25,math.random(-0.05,0.05)));///vernier scale reading
	 
	thickness = math.add(math.multiply(MS,mslc),math.multiply(VS,vslc));///thickness of tooth in  inch
		
	console.log('thickness =' + thickness);
	
	/* var count = math.divide(diff,0.7);
	lsmm = math.round(math.divide(micromm,0.7));
	
	displacement = math.add(-10,count);
	console.log('D = '+ displacement);
	
	E = math.abs(math.multiply(displacement,20));///20mV/mm sensitivity
	
	document.getElementById('displacement').value = math.round(displacement); */
	if(countbox == 0){
		document.getElementById('t1').value = thickness;
	}
	if(countbox == 1){
		document.getElementById('t2').value = thickness;
	}
	if(countbox == 2){
		document.getElementById('t3').value = thickness;
	}
	countbox++;
	
	if(countbox == 3){
		countbox = 0;
	}
	console.log('countbox =' + countbox);
 }
 
 var span,countbox2 = 0;
 function Math_model2(){
	 
	 var psy = 20;///angle sai
	 var N = 30;///number of teeth of the spur gear
	 var smn = math.divide(math.multiply(N,math.tan(psy)),math.pi);///n value acc. manual
	 var ni = math.round(smn);
	 
	 
	var lscount = 0.01;
	 
	 var MS = math.add(32,math.random(0.1,0.5));///main scale reading of flange micrometer
	 var VS = math.add(27,math.random(1,2));///main scale reading of flange micrometer
	 
	span = math.add(MS,math.multiply(VS,lscount));///span in  mm
		
	console.log('span =' + span);
	
	/* var count = math.divide(diff,0.7);
	lsmm = math.round(math.divide(micromm,0.7));
	
	displacement = math.add(-10,count);
	console.log('D = '+ displacement);
	
	E = math.abs(math.multiply(displacement,20));///20mV/mm sensitivity
	
	document.getElementById('displacement').value = math.round(displacement); */
	if(countbox2 == 0){
		document.getElementById('s1').value = span;
	}
	if(countbox2 == 1){
		document.getElementById('s2').value = span;
	}
	
	countbox2++;
	
	if(countbox2 == 2){
		countbox2 = 0;
	}
	console.log('countbox2 =' + countbox2);
 }
 
 
 function Math_model(){
	 
	 if(document.getElementById('seudobox').value == 1){
		 Math_model1();
	 }
	 else if(document.getElementById('seudobox').value == 2){
		 Math_model2();
	 }
	 
 } 
 
 
 /////////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;



//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTable1() {///thickness

	var N = 30;///number of teeth
	var m = 4;///module
	
	var T = math.divide(math.multiply(N,m,math.sin(math.divide(math.pi,math.multiply(2,N)))),25.4);///theoritical thickness of tooth
	
    arr[0] = tabrowindex+1 ;
    arr[1] = math.divide(math.round(math.multiply($('#t1').val(),1000)),1000);///math.divide(math.floor(math.multiply($('#t1').val(),1000)),1000);
    arr[2] = math.divide(math.round(math.multiply($('#t2').val(),1000)),1000);///math.divide(math.floor(math.multiply($('#t2').val(),1000)),1000);
	arr[3] = math.divide(math.round(math.multiply($('#t3').val(),1000)),1000);///math.divide(math.floor(math.multiply($('#t3').val(),1000)),1000);
	arr[4] = math.divide(math.add(arr[1],arr[2],arr[3]),3);
	arr[5] = math.divide(math.round(math.multiply(T,1000)),1000);
	arr[6] = math.subtract(arr[4],arr[5]);
	
   
	
	table = document.getElementById("obsTable1");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 7; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  

function CreateTable2() {///span

    arr[0] = tabrowindex+1;
    arr[1] = math.divide(math.round(math.multiply($('#s1').val(),100)),100);///math.divide(math.floor(math.multiply($('#t1').val(),1000)),1000);
    arr[2] = math.divide(math.round(math.multiply($('#s2').val(),100)),100);///math.divide(math.floor(math.multiply($('#t2').val(),1000)),1000);
	arr[3] = math.divide(math.round(math.multiply($('#ms').val(),100)),100);///math.divide(math.floor(math.multiply($('#t3').val(),1000)),1000);
	
   
	
	table = document.getElementById("obsTable2");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 4; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  

function CreateTable(){
	
if(document.getElementById('seudobox').value == 1){
CreateTable1();	
}	

if(document.getElementById('seudobox').value == 2){
CreateTable2();	
}
	
}

function Experiment1() {
       window.location.assign("index.html");
}
function Experiment2() {
       window.location.assign("index_span.html");
	   
}
/// clear button function

function Refresh(){///donot keep the name of the function as clear

var tableno = document.getElementById('seudobox').value;
	
	if(tableno == '1'){
	var Dtable= document.getElementById('obsTable1');
	
	document.getElementById('t1').value = 0;
	document.getElementById('t2').value = 0;
	document.getElementById('t3').value = 0;
	
	$('#maxt').val(0);
	$('#mint').val(0);
	$('#varit').val(0);
	$('#tmt').css('display','none');
	$('#pmt').css('display','none');
	}
	if(tableno == '2'){
	var Dtable= document.getElementById('obsTable2');

	document.getElementById('s1').value = 0;
	document.getElementById('s2').value = 0;
	document.getElementById('ms').value = 0;
	
	}
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	//Dtable.style.display="none";
	tabrowindex=0;
	
	
 }


function calculate(){
	var max = $('#maxt').val();
	var min = $('#mint').val();
	var sub = math.subtract(max,min);
	$('#varit').val(sub);
	$('#tmt').css('display','block');
	//$('#pmt').css('display','block');	
}

function calculate2(){
	var sp1 = $('#s1').val();
	var sp2 = $('#s2').val();
	var mean = math.divide(math.add(sp1,sp2),2);
	$('#ms').val(mean);
		
}