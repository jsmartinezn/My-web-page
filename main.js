"use strict";
/*Usa la funcion edad y devuelve el texto concatenado con la edad calculada*/
const myHeading = document.querySelector("p");
var str1 =
  "Hi my name is Sebastián Martínez, I live in Bogotá, Colombia and I'am ";
var str2 =
  " years old. I'm currently enrolled at Universidad de los Andes studying Industrial Engineering and System Engineering";
myHeading.textContent = str1.concat(edad(), str2);

/*Calcula la cantidad de años que han pasado desde el 26 de agosto de 1998*/
function edad() {
  var hoy = new Date();
  var nacimiento = new Date(1998, 7, 26);
  var edad = hoy.getYear() - nacimiento.getYear() - 1;
  if (
    hoy.getMonth() > nacimiento.getMonth() ||
    (hoy.getMonth() == nacimiento.getMonth() &&
      hoy.getDate() >= nacimiento.getDate())
  ) {
    edad++;
  }
  return edad;
}
