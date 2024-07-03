function valoresOriginales() {
  console.clear();
  console.log(
    "%c RECUERDE QUE TIENE QUE HABER PULSADO EL BOTÓN Mostrar Avanzadas",
    "background-color:red;color:#fff;padding:5px 10px;"
  );
  console.log(
    "%c Permisos en " + location.href,
    "background-color:red;color:#fff;padding:5px 10px;"
  );

  console.log(
    "%c tipos de permisos:  0->No ajustado   1->Permitir   0->Prevenir   -1000->Prohibir",
    "background-color:green;color:white;padding:4px 8px;"
  );

  const tipodesalida = prompt("Introduce tipo de salida: JSON / consola");

  var settings = {};

  // get all the capability radioboxes
  $('#defineroletable input[type="radio"]').each(function () {
    var radio = $(this);

    if (radio.is(":checked")) {
      settings[radio.prop("name")] = radio.val();
    }
  });

  if (tipodesalida == "JSON") {
    //alert(JSON.stringify(settings));
    const nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = JSON.stringify(settings);
    document.body.appendChild(nuevoDiv);
    return;
  }

  //return settings;
  let claves = Object.keys(settings);
  for (let i = 0; i < claves.length; i++) {
    //muestro clave y su valor
    console.log(claves[i], settings[claves[i]]);
  }
}
