
///
document.getElementById("btnReiniciar").addEventListener("click", function () {
    // Recargar la página para reiniciar todos los datos
    window.location.reload();
  });
  

  ///

  class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion = "";
        if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = "Baby Boom";
        alert(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue Paz y explosion demografica y El rasgo característico de esta generación es la ambicion.`);
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
        alert(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue crisis del 73 y transicion española y El rasgo característico de esta generación es la obsesion por el exito.`);
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = "Generacion Y";
        alert(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue la inicio de la digitalizacion y El rasgo característico de esta generación es la frustracion.`);
      } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = "Generación Z";
        alert(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue la espansion masiva de internet y El rasgo característico de esta generación es la irreverencia.`);
      } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        generacion = "silent generation";
        alert(`Esta persona pertenece a la generación ${generacion}. La circunstancia historica de esta generación fue el conficto belico y El rasgo característico de esta generación es la austeridad.`);
      } else {
        alert("Año de nacimiento inválido.");
      }
      return
    }
  }
  
  const persona1 = new Persona("Juan", 25, "12345678", "H", 70, 1.75, 1996);
  const persona2 = new Persona("María", 40, "23456789", "M", 60, 1.65, 1978);
  
  persona1.mostrarGeneracion();
  persona2.mostrarGeneracion();



///


  document.getElementById('btnMostrarEdad').addEventListener('click', function() {
    // Obtener el valor de la edad ingresada en el formulario
    const edad = document.getElementById('edad').value;

    // Verificar si la edad es mayor a 18 años y mostrar un mensaje
    
    if (parseInt(edad) > 18) {
        alert('Es mayor de edad');
    } else {
        alert('No es mayor de edad');
    }
});

///

document.getElementById('btnMostrarDatos').addEventListener('click', function() {
    // Obtener los valores ingresados en el formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    // Crear una cadena de texto con todos los datos
    const datos = 'Nombre: ' + nombre +
                  '\nEdad: ' + edad +
                  '\nDNI: ' + dni +
                  '\nSexo: ' + sexo +
                  '\nPeso: ' + peso +
                  '\nAltura: ' + altura +
                  '\nAño de Nacimiento: ' + anioNacimiento;

    // Mostrar los datos en un cuadro de diálogo de alerta
    alert(datos);
});


///

document.getElementById('generacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    persona.mostrarGeneracion();


  });
  