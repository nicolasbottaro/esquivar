let elem0 = document.querySelector('.izquierda')
let elem1 = document.querySelector('.derecha')
let back0 = document.querySelector('.izquierdapersonaje')
let back1 = document.querySelector('.derechapersonaje')
let botonizq = document.querySelector('.cuevaizq')
let botonder = document.querySelector('.cuevader')
let empezarboton = document.querySelector('.empezar')
let pos = -90;
let activo = Math.random();
let nivel = 0;


empezarboton.addEventListener('click', empezarProg)



function empezarProg() {
back0.classList.add("active");
botonizq.addEventListener('click', cambiarActivoizq)
botonder.addEventListener('click', cambiarActivoder)
pos = -90;
activo = Math.random();
back0.classList.add("active");
nivel = 3;
window.finalizar = setInterval(frame, 10-nivel);
}
  
function frame() {
  		if (pos== 115){
        pos = '-90';
        activo = Math.random();
      } else {

			if (activo < 0.5){
 			  elem0.style.backgroundImage = "url('meteorito.png')";
        elem1.style.backgroundColor = 'transparent';

      } else {
 			  elem1.style.backgroundImage = "url('meteorito.png')";
        elem0.style.backgroundColor = 'transparent';

      }
      pos++;
      if (activo < 0.5){
      elem0.style.top = pos + 'px';
      if ( pos == 85 && back0.classList.contains("active")){
      clearInterval(window.finalizar);
      elem0.style.backgroundColor = 'transparent';
      back0.classList.remove("active");
      }
      } else {
      elem1.style.top = pos + 'px';
      if ( pos == 85 && back1.classList.contains("active")){
      clearInterval(window.finalizar);
      elem1.style.backgroundColor = 'transparent';
      back1.classList.remove("active");
      }
      }
      }
}
   
function cambiarActivoizq() {
   back1.classList.add("active");
   back0.classList.remove("active");
}

function cambiarActivoder() {
   back0.classList.add("active");
   back1.classList.remove("active");
}
