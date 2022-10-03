score = 75;
msg = '';

function congratulate() {
    msg += 'Proceed to the next round.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;