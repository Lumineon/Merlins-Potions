// modal

var modal = document.getElementById('potion-modal');
var close = document.getElementById('btn-modal');
var open = document.getElementsByClassName('potion-image');

//abrir modal
for (let i = 0; i < open.length; i++) {
    open[i].addEventListener('click', function () {
        modal.classList.add('show');
        showInfos(i + 1);
    })

}


// fechar modal quando clicar no botão
close.onclick = function () {
    modal.classList.remove('show');
}

// fechar modal quando clicar fora da janela
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}

//json
function getJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json",
        false);
    xmlhttp.send(null);
    var myObj = JSON.parse(xmlhttp.responseText);
    return myObj;
}

function showInfos(id) {
    var myObj = getJSON();

    document.getElementById("potion-name").innerHTML = myObj.potions[id].name;
    document.getElementById("potion-effect").innerHTML = myObj.potions[id].effect;
    document.getElementById("potion-price").innerHTML = '$' + myObj.potions[id].price;
    document.getElementById("potion-image").src = 'Products/' + myObj.potions[id].image;

    for (let j = 0; j < myObj.potions[id].ingredients.length; j++) {
        var ul = document.getElementById('potion-ingredients');
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = myObj.potions[id].ingredients[j];
    }
    //ta concatenando em todo click
}

