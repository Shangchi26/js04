scores = [24, 32, 17];
arrayLength = scores.length;
roundNumber = 0;
msg = '';

for (var i = 0; i < arrayLength; i++) {
    roundNumber = (i+1);
    msg +='Round ' + roundNumber + ': ';
    msg += scores[i] + '<br>'
}

document.getElementById('answer').innerHTML = msg;