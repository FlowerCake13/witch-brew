var batImg = document.getElementById('bat');
var frogImg = document.getElementById('frog');
var hatImg = document.getElementById('hat');
var pumpkinImg = document.getElementById('pumpkin');
var scaleImg = document.getElementById('scale');
var mixingButton = document.getElementById('start')
var product = document.getElementById('product');
var batText = document.getElementById('batcount')
var frogText = document.getElementById('frogcount')
var hatText = document.getElementById('hatcount')
var pumpkinText = document.getElementById('pumpkincount')
var scaleText = document.getElementById('scalecount')
var batCount = 0;
var frogCount = 0;
var hatCount = 0;
var pumpkinCount = 0;
var scaleCount = 0;

batImg.addEventListener('click',function(){
	batCount++
	batText.innerHTML = "Bat: " + batCount
})
frogImg.addEventListener('click',function(){
	frogCount++
	frogText.innerHTML = "Frog: " + frogCount
})
hatImg.addEventListener('click',function(){
	hatCount++
	hatText.innerHTML = "Hat: " + hatCount
})
pumpkinImg.addEventListener('click',function(){
	pumpkinCount++
	pumpkinText.innerHTML = "Pumpkin: " + pumpkinCount
})
scaleImg.addEventListener('click',function(){
	scaleCount++
	scaleText.innerHTML = "Scale: " + scaleCount
})

mixingButton.addEventListener('click', function(){
	if (frogCount >= 3 && hatCount >= 2) {
		product.innerHTML = "Froggy Witch Soup"
	} 
	else if (scaleCount >= 3 && hatCount >= 2) {
		product.innerHTML = "safdasdfasdfasdfasdf"
	} 	
	else{
		product.innerHTML = "Try Again!"
	}
	clear();
})

function clear(){
	batCount = 0;
	batText.innerHTML = "Bat: " + batCount
	frogCount = 0;
	frogText.innerHTML = "Frog: " + frogCount
	hatCount = 0;
	hatText.innerHTML = "Hat: " + hatCount
	pumpkinCount = 0;
	pumpkinText.innerHTML = "Pumpkin: " + pumpkinCount
	scaleCount = 0;
	scaleText.innerHTML = "Scale: " + scaleCount
}