let saludaBtns = document.getElementsByClassName('saluda')

let amigoName = document.getElementsByClassName('amigo')

let borraBtns = document.getElementsByClassName('borrar')

console.log(saludaBtns)

console.log(amigoName)

for (let index = 0; index < saludaBtns.length; index++) {
    saludaBtns[index].onclick = function (rem) {
        let name = this.getAttribute('data-name')
        let idp = this.getAttribute('data-idp')
        let infop = document.getElementById(idp).innerHTML
        alert('Paso de tu culo. Soy ' + infop + ' por cierto.');
    }
}

for (let index = 0; index < saludaBtns.length; index++) {
    borraBtns[index].onclick = function (){
        let elIdLi = this.getAttribute("data-li");
        removeElement(elIdLi);
    }


}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem)
}