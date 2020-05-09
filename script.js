let elem0 = document.querySelector('.izquierda')
let elem1 = document.querySelector('.derecha')
let back0 = document.querySelector('.izquierdapersonaje')
let back1 = document.querySelector('.derechapersonaje')
let botonizq = document.querySelector('.cuevaizq')
let botonder = document.querySelector('.cuevader')
let empezarboton = document.querySelector('.empezar')
let header = document.querySelector('.top')
let pos = -130;
let activo = Math.random();


empezarboton.addEventListener('click', empezarProg)



function empezarProg() {
header.style.display = "none";
back0.classList.add("active");
botonizq.addEventListener('click', cambiarActivoizq)
botonder.addEventListener('click', cambiarActivoder)
pos = -130;
activo = Math.random();
back0.classList.add("active");
jugadas = 0;
window.finalizar = setInterval(frame, 3);
}
  
function frame() {
  	if (pos == 230){
        pos = '-130';
        activo = Math.random();	
      } else {
	if (activo < 0.5){
 	elem0.style.backgroundImage = "url('meteorito.png')";
        elem1.style.backgroundImage = 'none';
      } else {
 	elem1.style.backgroundImage = "url('meteorito.png')";
        elem0.style.backgroundImage = 'none';
      }
      pos++;
      if (activo < 0.5){
      elem0.style.top = pos + 'px';
      if ( pos == 130 && back0.classList.contains("active")){
      clearInterval(window.finalizar);
      elem0.style.backgroundImage = 'none';
      back0.classList.remove("active");
      botonizq.removeEventListener('click', cambiarActivoizq);
      botonder.removeEventListener('click', cambiarActivoder);
      header.style.display = "inline";
      }
      } else {
      elem1.style.top = pos + 'px';
      if ( pos == 130 && back1.classList.contains("active")){
      clearInterval(window.finalizar);
        elem1.style.backgroundImage = 'none';
      back1.classList.remove("active");
      botonizq.removeEventListener('click', cambiarActivoizq);
      botonder.removeEventListener('click', cambiarActivoder);
      header.style.display = "inline";
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
