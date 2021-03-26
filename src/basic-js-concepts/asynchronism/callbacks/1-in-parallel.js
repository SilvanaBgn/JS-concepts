/* Consigna: queremos que cargue un grupo de imágenes y que nos avise cuando 
terminaron todas de cargarse. Sin embargo, que si hubo un error en una, que 
aborte la carga completa*/
function cargarImagenes(imagenes, css, exito, error) {
  const cantidadDeImagenes = imagenes.length,
      errorMostrado = false,
      imagenesCargadas = 0;

  const imagenCargadaCb = function () {
      if (errorMostrado) return;

      imagenesCargadas++;
      if (imagenesCargadas === cantidadDeImagenes) {
          exito();
      }
  }

  const imagenErrorCb = function () {
      if (errorMostrado) return;
      errorMostrado = true;
      error();
  }

  for (let i = 0; i < cantidadDeImagenes; i++) {... }
}



const imagenes = ['url1', 'url2'],
    css = {width: '50px', height: '50px'};
function cargarImagenes(imagenes, css,
  function () {
      console.log('Se cargaron TODAS las imagenes');
  },
  function () {
      console.log('Al menos una imagen dio error');
  }          
);


te