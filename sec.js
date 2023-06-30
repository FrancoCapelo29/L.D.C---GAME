/*function PlayAudio(){
    document.getElementById("musica2").play();
}*/

/*let contador = 0;

function siguiente() {
  contador++;

  switch(contador){
    case 1: 
    document.getElementById('parrafo').innerHTML = 'Miras como el religioso ora con todas sus fuerzas por ayuda divina, solo para darte cuenta que una viga se aloja en su vientre atrapandolo, nadie podrá ayudarlo.';
    break;
    case 2: 
    document.getElementById('parrafo').innerHTML = 'Tus pasos se detienen, no por ti, si no por una mano que te sujeta con desesperación, al mirar a la dueña de esta mano, la esperanza comenzó a surgir en los ojos de aquella chica, pero tu no ves eso, en lo que te concentras es como un muro de concreto está aplastando los pies de la chica.';
    break;
    case 3:
    document.getElementById('parrafo').innerHTML = 'Es imposible salvarla, lo sabes, no hay nada en lo que puedas ayudarla, entonces haces lo único que puedes hacer, sigues caminando ignorando las súplicas de salvación que la chica grita desgarrando su garganta por el smog en el aire por la carne quemada, con cada paso que das sus súplicas se convierten en gritos, y los gritos en maldiciones, ella te desea la muerte por dejarla abandonada.';
    break;
    case 4:
    document.getElementById('parrafo').innerHTML = 'Tus pensamientos se detienen, nada bueno sale recordando, por eso si caminando por este lugar, un lugar donde no hay algún sentido del tiempo, donde tu existencia no es más que una anormalidad, un sitio donde solo hay un infinito sin nada, no sabes el porque caminas, no tienes ambiciones.';
    break;
    case 5:
    document.getElementById('parrafo').innerHTML = 'Lo que alguna vez fuiste ya no existe para utilizarlo como motor, aun así dudas en seguir caminando sabiendo que sería inutil, sin embargo sigues caminando ya que es lo único que puedes hacer, porque sabes que debe haber algo más allá de toda la nada que te rodea.';
    break;
    case 6:
      document.getElementById('parrafo').style.display = 'none';
      document.getElementById('opciones').style.display = 'block';
      document.getElementById('siguiente').style.display = 'none'; 
    break;
  }
}

function opcionA() {
  document.getElementById('parrafo').style.display = 'block';
  document.getElementById('parrafo').innerHTML = 'Al seguir adelante, sin necesidad de esperar alguna ayuda, es el primer paso para encontrar tu salvación, o la condena.'
  document.getElementById('opciones').style.display = 'none';
  document.getElementById('siguiente').style.display = 'block';
}

function opcionB() {
  document.getElementById('parrafo').style.display = 'block';
  document.getElementById('parrafo').innerHTML = 'Sigues esperando un rumbo al que ir por toda la eternidad.'
  document.getElementById('opciones').style.display = 'none';
  document.getElementById('siguiente').style.display = 'block';  
} */

var contador = 0;
var parrafos = [
  'Aquí va el texto del primer párrafo.',
  'Aquí va el texto del segundo párrafo.',
  'Aquí va el texto del tercer párrafo.'
];

var parrafosOpcionA = [
  'Al seguir adelante, sin necesidad de esperar alguna ayuda, es el primer paso para encontrar tu salvación, o la condena.',
  'Aquí va el texto de otro párrafo agregado en la opción A.'
];

var parrafosOpcionB = [
  'Sigues esperando un rumbo al que ir por toda la eternidad.',
  'Aquí va el texto de otro párrafo agregado en la opción B.',
  'Aquí va el texto de un tercer párrafo agregado en la opción B.'
];

function siguiente() {
  if (contador < parrafos.length) {
    document.getElementById('parrafo').innerHTML = parrafos[contador];
    contador++;

    if (contador === parrafos.length) {
      document.getElementById('siguiente').style.display = 'none';
      document.getElementById('opciones').style.display = 'block';

      if (!document.getElementById('boton-final').classList.contains('oculto')) {
        document.getElementById('boton-final').style.display = 'block';
      }
    } else {
      document.getElementById('siguiente').style.display = 'block';
      document.getElementById('boton-final').style.display = 'none';
    }
  }
}

function opcionA() {
  var botonesOpciones = document.getElementsByClassName('opcion');
  for (var i = 0; i < botonesOpciones.length; i++) {
    botonesOpciones[i].style.display = 'none';
  }

  parrafos = parrafosOpcionA.slice();

  contador = 0;

  siguiente();

  document.getElementById('opciones').style.display = 'none';
  document.getElementById('siguiente').style.display = 'block';
  document.getElementById('boton-final').style.display = 'none';
  document.getElementById('boton-final').onclick = function() {
    window.location.href = 'otra_pagina_A.html';
  };
}

function opcionB() {
  var botonesOpciones = document.getElementsByClassName('opcion');
  for (var i = 0; i < botonesOpciones.length; i++) {
    botonesOpciones[i].style.display = 'none';
  }

  parrafos = parrafosOpcionB.slice();

  contador = 0;

  siguiente();

  document.getElementById('opciones').style.display = 'none';
  document.getElementById('siguiente').style.display = 'block';
  document.getElementById('boton-final').style.display = 'none';
  document.getElementById('boton-final').onclick = function() {
    window.location.href = 'otra_pagina_B.html';
  };
}

function irAOtraPagina() {
  window.location.href = 'otra_pagina.html';
}
