var btn1 = document.getElementById('btn1');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');

var i = 0;
var d = 0;

btn1.addEventListener('click', function(){
	i++;
	score1.innerHTML = i;	
	if(i == 20) {
		alert('Pobednik je player1')
	}
});


addEventListener('keydown', function(){
	d++;
	score2.innerHTML = d;	
	if(d == 20) {
		alert('Pobednik je player2')
	}
});
