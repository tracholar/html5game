var ctx;
var width = 400, height = 300;
var rectX=100,rectY=50,rectSize = 100, dotr=10;
var myOption = 1;
function init(){
	ctx = document.getElementById('canvas').getContext('2d')

}

function draw1(){
	var x = rectX + rectSize/2, y = rectY + rectSize/2;
	
	ctx.beginPath();
	ctx.arc(x,y,dotr,0,Math.PI*2);
	ctx.closePath();
	ctx.fill();
}
function draw2(){
	var x1 = rectX + rectSize/2 - 20, y1 = rectY + rectSize/2 -20;
	var x2 = rectX + rectSize/2 + 20, y2 = rectY + rectSize/2 +20;
	
	ctx.beginPath();
	ctx.arc(x1,y1,dotr,0,Math.PI*2);
	ctx.arc(x2,y2,dotr,0,Math.PI*2);
	ctx.closePath();
	
	ctx.fill();
}
function draw3(){
	var x = rectX + rectSize/2, y = rectY + rectSize/2;
	
	ctx.beginPath();
	ctx.arc(x-3*dotr,y-3*dotr,dotr,0,Math.PI*2);
	ctx.arc(x,y,dotr,0,Math.PI*2);
	ctx.arc(x+3*dotr,y+3*dotr,dotr,0,Math.PI*2);
	ctx.closePath();
	
	ctx.fill();
}
function draw4(){
	var x = rectX + rectSize/2, y = rectY + rectSize/2;
	var offset = [[-2*dotr,-2*dotr],[2*dotr,-2*dotr],[-2*dotr,2*dotr],[2*dotr,2*dotr]];
	
	for(var i in offset){
		ctx.beginPath();
		ctx.arc(x+offset[i][0],y+offset[i][1],dotr,0,Math.PI*2);
		ctx.closePath();
		ctx.fill();
	}
	
	
}
function draw5(){
	var x = rectX + rectSize/2, y = rectY + rectSize/2;
	var offset = [
		[-2*dotr,-2*dotr],[2*dotr,-2*dotr],
		[-2*dotr,2*dotr],[2*dotr,2*dotr],
		[0,0]
	];
	
	for(var i in offset){
		ctx.beginPath();
		ctx.arc(x+offset[i][0],y+offset[i][1],dotr,0,Math.PI*2);
		ctx.closePath();
		ctx.fill();
	}
	
	
}
function draw6(){
	var x = rectX + rectSize/2, y = rectY + rectSize/2;
	var offset = [
		[-2*dotr,-3*dotr],[2*dotr,-3*dotr],
		[-2*dotr,0],[2*dotr,0],
		[-2*dotr,3*dotr],[2*dotr,3*dotr]
	];
	
	for(var i in offset){
		ctx.beginPath();
		ctx.arc(x+offset[i][0],y+offset[i][1],dotr,0,Math.PI*2);
		ctx.closePath();
		ctx.fill();
	}
	
}
function start(){
	var n = Math.floor(Math.random()*6);
	var drawFunc = [draw1,draw2,draw3,draw4,draw5,draw6];
	ctx.clearRect(0,0,width,height);
	
	ctx.lineWidth = 5;
	ctx.strokeRect(rectX,rectY,rectSize,rectSize);
	ctx.fillStyle = "#009966";
	
	ctx.lineWidth = 1;
	//ctx.strokeText(n,200,250);
	//draw1();
	drawFunc[n]();
	
	if(n>=myOption*3 && n<myOption*3+3){
		return true;
	}
	return false;
}

window.onload = function(){
	init();
	document.getElementById('startButton').onclick = function(){
		for(var i=0;i<20;i++){
			setTimeout(start,100*i);
		}
		setTimeout(function(){
			if(start()){
				var s = parseInt($('#score').text());
				$('#score').text(s+1);
			}
		},100*i);
	}
	$('.option').click(function(){
		$(this).addClass('selected').siblings('.option').removeClass('selected');
		if($(this).attr('id')=='big'){
			myOption = 1;
		}else{
			myOption = 0;
		}
	});
}