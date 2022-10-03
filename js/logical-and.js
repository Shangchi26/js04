score1 = 8;
score2 = 8;
pass1  = 6;
pass2 = 6;

var minPass = (score1 >= pass1) || (score2 >= pass2)

var msg = 'Resit required: ' + !minPass;

var el = document.getElementById('answer');
el.textContent = msg;