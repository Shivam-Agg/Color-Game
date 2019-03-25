var colors=generateColorsArray(6);
var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay")
var messagedisplay=document.getElementById("messagedisplay")
var reset=document.getElementById("reset")
var hardbutton=document.getElementById("hard")
var easybutton=document.getElementById("easy");
var top=document.getElementById("top")
var pickedcolor;
var correctcolor=pickcolor(colors);
colordisplay.textContent="RGB" + correctcolor.slice(3);
reset.textContent="New Colors"
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		pickedcolor=this.style.backgroundColor;
		if(pickedcolor==correctcolor){
			changeColors();
			messagedisplay.textContent="Correct"
			reset.textContent="Play Again"
			top.style.backgroundColor=correctcolor;

		}else{
			this.style.backgroundColor="#232323"
			messagedisplay.textContent="Wrong Choice"
		}
	})
}
reset.addEventListener("click",function(){
	colors=generateColorsArray(6);
	correctcolor=pickcolor(colors);
	colordisplay.textContent="RGB" + correctcolor.slice(3);
	for(var i=0;i<3;i++){
		squares[i].style.backgroundColor=colors[i]
	}
	for(var j=3;j<6;j++){
		squares[j].style.backgroundColor=colors[j]
		squares[j].style.display="block"
	}
	messagedisplay.textContent=""
})
hardbutton.addEventListener("click",function(){
	colors=generateColorsArray(6);
	correctcolor=pickcolor(colors);
	colordisplay.textContent="RGB" + correctcolor.slice(3);
	for(var i=0;i<3;i++){
		squares[i].style.backgroundColor=colors[i]
	}
	for(var j=3;j<6;j++){
		squares[j].style.backgroundColor=colors[j]
		squares[j].style.display="block"
	}
	messagedisplay.textContent=""

})
easybutton.addEventListener("click",function(){
	colors=generateColorsArray(3);
	correctcolor=pickcolor(colors);
	colordisplay.textContent="RGB" + correctcolor.slice(3);
	for(var i=0;i<3;i++){
		squares[i].style.backgroundColor=colors[i]
	}
	for(var j=3;j<6;j++){
		squares[j].style.display="none"
	}
	messagedisplay.textContent=""

})
function generateColorsArray(num){
	var color=[];
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random()*256);
	    var g=Math.floor(Math.random()*256);
	    var b=Math.floor(Math.random()*256);
	    var c="rgb(" + r +", "  + g + ", " + b + ")";
	    color.push(c);
	}
	return color;

}
function changeColors(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=correctcolor;
	}
}
function pickcolor(colors){
	var a=Math.floor(Math.random()*colors.length)
	return colors[a];
}