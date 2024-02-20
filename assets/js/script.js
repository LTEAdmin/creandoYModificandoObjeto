// creacion de objeto consultorio, con sus atributos, funciones get y set para cada uno de ellos
function Consultorio(nombre, paciente) { 
    this.nombre = nombre;
    this.paciente = paciente;

    Consultorio.prototype.getNombre = function() {
        return this.nombre;
    }
    
    Consultorio.prototype.getPaciente = function () {
      return this.paciente;
    };

    Consultorio.prototype.setPaciente = function (paciente) {
      this.paciente = paciente;
    };

    Consultorio.prototype.setPacientes = function (pacientes) {
      this.pacientes = pacientes;
    };
}

// creacion de objeto paciente, con sus atributos, funciones get y set para cada uno de ellos
function Paciente(nombre, rut, edad, diagnostico) { 
    this.nombre = nombre;
    this.rut = rut;
    this.edad = edad;
    this.diagnostico = diagnostico;

    Paciente.prototype.getNombre = function () {
      return this.nombre;
    };

    Paciente.prototype.setNombre = function (nombre) {
      this.nombre = nombre;
    };
    Paciente.prototype.getEdad = function () {
      return this.edad;
    };

    Paciente.prototype.setEdad = function (edad) {
      _edad = edad;
    };

    Paciente.prototype.getRut = function () {
      return this.rut;
    };

    Paciente.prototype.setRut = function (rut) {
      this.rut = rut;
    };

    Paciente.prototype.setDiagnostico = function (diagnostico) {
      this.diagnostico = diagnostico;
    };

    Paciente.prototype.getDiagnostico = function () {
      return this.diagnostico;
    };
}

// ingreso de datos de los pacientes
let paciente1 = new Paciente("Maria", "1-9", 30, "covid");
let paciente2 = new Paciente("Juan", "2-7", 85, "neumonia");
let paciente3 = new Paciente("Pedro", "3-5", 25, "influenza");
let paciente4 = new Paciente("Luis", "4-3", 12, "asma");
let pacientes = [paciente1, paciente2, paciente3, paciente4];

// ingreso de datos del consultorio
let consultorio1 = new Consultorio("Consultorio 1", [paciente1, paciente2, paciente3, paciente4]);

//método que permita mostrar todos los datos de los usuarios registrados.
function mostrarPacientes() {
    console.log("Datos de los pacientes");
  pacientes.forEach(element => {
    console.log(`Nombre: ${element.getNombre()} | Rut: ${element.getRut()} | Edad: ${element.getEdad()} | Diagnostico: ${element.getDiagnostico()}`);
  });
}

mostrarPacientes();
//Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre
Paciente.prototype.buscarPorNombre = function (nombre) {
    console.log("Buscando por nombre");
    return this.pacientes.filter(paciente => paciente.nombre === nombre);
}

var pacienteSolicitado = Paciente.buscarPorNombre("Pedro");
console.log(`paciente Solicitado con nombre Pedro : ${pacienteSolicitado.Paciente.nombre} , ${pacienteSolicitado.Paciente.rut} , ${pacienteSolicitado.Paciente.edad} , ${pacienteSolicitado.Paciente.diagnostico}`);

