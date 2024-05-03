/Función para reproducir/pausar el video de fondo
const video = document.getElementById("myVideo");
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Funcion para agregar productos a la tabla
function agregarProducto() {
  const producto = document.getElementById("producto").value;
  const lab = document.getElementById("lab").value;
  const distribuidor = document.getElementById("distribuidor").value;
  const fechaCad = document.getElementById("fechaCad").value;

  const table = document.querySelector("table tbody");
  const fila = tabla.insertRow(-1);

  const celda1 = fila.insertarCelda(0);
  const celda2 = fila.insertarCelda(1);
  const celda3 = fila.insertarCelda(2);
  const celda4 = fila.insertarCelda(3);

  celda1.innerHTML = producto;
  celda2.innerHTML = laboratorio;
  cell3.innerHTML = distribuidor;
  celda4.innerHTML = fechaCad;

  //Limpiar entradas
  document.getElementById("producto").value = "";
  document.getElementById("lab").value = "";
  document.getElementById("distribuidor").value = "";
  document.getElementById("fechaCad").value = "";
}

//Funcion para validar formulario
function validarForm() {
  const producto = document.getElementById("producto").value;
  const lab = document.getElementById("lab").value;
  const distribuidor = document.getElementById("distribuidor").value;
  const fechaCad = document.getElementById("fechaCad").value;

  if (producto === "" || laboratorio === "" || distribuidor === "" || fechaCad === "") {
    alert("Por favor llene todos los campos");
 falso retorno;
  } 

devolver verdadero;
}

//Función para mostrar mensaje de éxito al agregar producto
function mostrarExito() {
  Swal.fire({
    title: "Producto Agregado",
    text: "El producto ha sido agregado exitosamente!",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
} 
