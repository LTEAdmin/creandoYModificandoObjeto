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

function Paciente(nombre, rut, edad, diagnostico) { 
    this.nombre = nombre;
    this.rut = rut;
    this.edad = edad;
    this.diagnostico = diagnostico;

    Paciente.prototype.getNombre = function () {
      returnthis.nombre;
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
