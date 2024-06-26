"use strict";

function config() {
    var max = parseInt(document.getElementById('max').value);
    var skip = parseInt(document.querySelector('input[name="skip"]:checked').value);
    var sign = parseInt(document.querySelector('input[name="sign"]:checked').value);
    var simplify = parseInt(document.querySelector('input[name="simple"]:checked').value)
    return [max, skip, sign, simplify];
}

function next() {
    var cfg = config();
    var max = cfg[0];

    var skip = cfg[1];
    if (skip == 3) skip = Math.floor(Math.random() * 3);

    var sign = cfg[2];
    if (sign == 2) sign = Math.floor(Math.random() * 2);
    var signTxt = sign == 0 ? '+' : '-';
    document.getElementById('sign').innerHTML = signTxt;

    var operands = sign == 0 ? nextSum() : nextDiff();

    var leftTxt = operands[0];
    if (skip == 0) leftTxt = '__';
    document.getElementById('left').innerHTML = leftTxt;

    var rightTxt = operands[1];
    if (skip == 1) rightTxt = '__';
    document.getElementById('right').innerHTML = rightTxt;

    var resultTxt = operands[2];
    if (skip == 2) resultTxt = '__';
    document.getElementById('result').innerHTML = resultTxt;
}

function nextSum() {
    var cfg = config();
    var max = cfg[0];
    var left = Math.floor(Math.random() * (max + 1));
    var right = Math.floor(Math.random() * (max + 1 - left));

    var simplify = cfg[3] == 1;
    if (simplify && left < 10) {
      while (right < 10 && left + right > 10) right = Math.floor(Math.random() * (max + 1 - left));
    }
    var result = left + right;
    return [left, right, result];
}

function nextDiff() {
  var sum = nextSum();
  return [sum[2], sum[0], sum[1]];
}
