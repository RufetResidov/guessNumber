'use strict'

var btn = document.getElementById('btn');
var text = document.getElementById('outputText');
var saygac=1;
var random=document.getElementById('random');
var clickbutton=document.getElementById('clickbutton');
var guess = Math.floor(Math.random() * 2);

btn.addEventListener('click', function () {
    var value = document.getElementById('inp').value;
    if (value > guess) {
        text.innerHTML = `${value}dan daha kicik reqem daxil edin`;
        saygac++;
    }
    else if (value < guess) {
        text.innerHTML = `${value}dan daha boyuk reqem daxil edin`;
        saygac++;
    }
    else if (value == guess) {
        text.innerHTML = `Tebrikler siz dogru cavabi tapdiniz.Cavab ${value}dir`;
        clickbutton.innerHTML=(`Siz ${saygac} defeye dogru cavabi tapdiniz `);
    }
    random.innerHTML=value;

})


