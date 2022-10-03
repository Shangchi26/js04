pass = 50;
score = 75;
msg = '';

if (score > pass) {
    msg += 'Congratulations, you passed!'
} else {
    msg = 'Have another go!'
}

var el = document.getElementById('answer');
el.textContent = msg;