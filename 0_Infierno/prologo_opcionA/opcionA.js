var contador = 0;
var parrafos = [
  'Al dejar de lado las dudas que atormentan tu mente sigues caminando, aunque tú mismo sabes que es falso, siempre tendrás dudas sobre tu existencia, dudas del porque sigues aqui mientras que otros no, pero eso no quiere decir que no puedas seguir avanzando por este camino que has elegido recorrer, la pregunta será, ¿podrás llegar hasta el final?'
];

function siguiente() {
    if (contador < parrafos.length) {
      document.getElementById('parrafo').innerHTML = parrafos[contador];
      contador++;

      if (contador === parrafos.length) {
        document.getElementById('parrafo').style.display = 'block';
        document.getElementById('siguiente').style.display = 'none';
        document.getElementById('opciones').style.display = 'block';
      }
    }
  }

  function opcionA() {
    window.location.href = '../primer_infierno/primer.html';
  }