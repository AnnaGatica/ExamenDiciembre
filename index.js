let titulo = document.querySelector('#titulo')
let imagen = document.querySelector('#imagen')
let botonEncender = document.querySelector('#botonEncender')
let botonApagar = document.querySelector('#botonApagar')

botonEncender.onclick = function() {
    imagen.src = 'https://img.freepik.com/vector-gratis/gradiente-bombilla_78370-524.jpg'
    titulo.style.color = "yellow"
    alert('¡Las luces estan encendidas!')
}

botonApagar.onclick = function (){
    imagen.src = 'https://media.istockphoto.com/id/502789173/es/foto/bombilla-concepto.jpg?s=612x612&w=0&k=20&c=17X8kKzw2iSyO_Kukn-gVJ-_1dd1qW15vS7Mlj7ICAE='
    titulo.style.color = "black"
    alert('¡Las luces estan apagadas!')

}
