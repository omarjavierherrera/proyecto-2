class Contacto {
    constructor(id, nombres, apellidos, telefono, ubicaciones = [], ciudad, direccion) {
      this.id = id;
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.telefono = telefono;
      this.ubicaciones = ubicaciones;
      this.ciudad = ciudad;
      this.direccion = direccion;
    }
  }
  
  class Agenda {
    constructor() {
      this.contactos = [];
    }
  
    crearContacto(id, nombres, apellidos, telefono, ubicaciones = [], ciudad, direccion) {
      const nuevoContacto = new Contacto(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion);
      this.contactos.push(nuevoContacto);
      console.log("Contacto creado con éxito.");
    }
  
    eliminarContacto(id) {
      const indice = this.contactos.findIndex(contacto => contacto.id === id);
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        console.log("Contacto eliminado con éxito.");
      } else {
        console.log("No se encontró un contacto con el ID proporcionado.");
      }
    }
  }
  
  // Ejemplo de uso
  const agenda = new Agenda();
  
  agenda.crearContacto(1, "juan", "castillo", "123456789", [], "bogota", "Calle 100");
  agenda.crearContacto(2, "paula", "García", "987654321", [], "bogota", "Avenida 34");
  agenda.crearContacto(3, "Carlos", "López", "555555555", [], "medellin");
  
  agenda.eliminarContacto(2);
  
  for (const contacto of agenda.contactos) {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombres: ${contacto.nombres}`);
    console.log(`Apellidos: ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`Ubicaciones: ${contacto.ubicaciones}`);
    console.log(`Ciudad: ${contacto.ciudad}`);
    console.log(`Dirección: ${contacto.direccion}`);
    console.log("-".repeat(30));
  }
  