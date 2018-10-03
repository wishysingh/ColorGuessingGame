var square=document.querySelectorAll(".square");
var nav = document.getElementById("nav");
console.log(square);
var length=6;
var color=getRandomColor(length);
var easyBtn = document.getElementById("easyBtn");
console.log(easyBtn);
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
	length=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	color=getRandomColor(length);
	color.push("#232323");
	color.push("#232323");
	color.push("#232323");
	pickedColor=getRandomNumber(length);
	quesPick.textContent=pickedColor;
	setSquare();
});
hardBtn.addEventListener("click",function(){
	length=6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	color=getRandomColor(length);
	pickedColor=getRandomNumber(length);
	quesPick.textContent=pickedColor;
	setSquare();
});

console.log(pickedColor);
var pickedColor=getRandomNumber(length);
console.log(pickedColor);
var quesPick=document.getElementById("rgb");
var message=document.querySelector("#message");
quesPick.textContent=pickedColor;
var reset=document.querySelector("#reset");
setSquare();
reset.addEventListener("click",function(){
	reset.textContent="New Game";
	message.textContent="";
	nav.style.background="steelblue";
	color=getRandomColor(length);
	pickedColor=getRandomNumber(length);
	quesPick.textContent=pickedColor;
	setSquare();
});
function setSquare()
{
	for (var i = 0; i < 6; i++) 
	{
		square[i].style.backgroundColor=color[i];
		console.log(color[i]);
		square[i].addEventListener("click",function(){
			console.log(this.style.backgroundColor);
			if (this.style.backgroundColor==pickedColor) {
				message.textContent="Correct";
				nav.style.background=pickedColor;
				changeColor(pickedColor);
				reset.textContent="Play Again";
			}
			else
			{
				this.style.backgroundColor="#232323";
				message.textContent="Try Again";
			}
		});
	}

}
function changeColor(colors){
	console.log(square);
	for(var i=0;i<length;i++)
	{
		console.log(i);
		square[i].style.background=colors;
	}
}
function getRandomNumber(len)
{
	var num= Math.floor(Math.random() * len);
	console.log(num);
	return color[num];
}
function getRandomColor(num)
{
	var arr=[];
	for (var i = 0; i < num; i++) {
		var rcolor=randomColor();
		arr.push(rcolor);
	}
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	var rgb="rgb("+r+", "+g+", "+b+")";
	return rgb;
}