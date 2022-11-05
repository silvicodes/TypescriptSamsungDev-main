import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaSilvia = new Direccion(
  "Calle Vicente Ramon",
  20,
  6,
  "B",
  0o3540,
  "Alicante",
  "Alicante"
)

const segundaResidenciaSilvia = new Direccion(
  "Calle Horaci",
  4,
  false,
  false,
  0o3016,
  "San Juan",
  "Alicante"
)

const mailSilvia = new Mail(
  "personal",
  "silviagarcia@gmail.com"
)

const telefonoFijoSilvia = new Telefono(
  "fijo",
  9333333
)

const telefonoMovilSilvia = new Telefono(
  "movil",
  690405691
)

const datosSilvia = new Persona(
  'Silvia',
  'Garcia',
  23,
  '78523694D',
  new Date(1998, 5, 10),
  'rosa',
  'mujer',
  [primeraResidenciaSilvia, segundaResidenciaSilvia],
  [mailSilvia],
  [telefonoFijoSilvia, telefonoMovilSilvia],
  "Trabaja en la localidad de la segunda residencia"
);

const primeraResidenciaMarta = new Direccion(
  "Calle Quevedo",
  2,
  6,
  "A",
  28015,
  "Chamberi",
  "Madrid"
)

const segundaResidenciaMarta = new Direccion(
  "Calle Miguel Angel",
  11,
  1,
  "A",
  28010,
  "Madrid",
  "Madrid"
)

const mailPersonalMarta = new Mail(
  "personal",
  "lopezmarta@hotmail.com"
)

const mailTrabajoMarta = new Mail(
  "personal",
  "work@marta.com"
)

const telefonoFijoMarta= new Telefono(
  "fijo",
  9897514569
)

const telefonoMovilMartaPersonal = new Telefono(
  "movil",
  666859710
)

const telefonoMovilMartaTrabajo = new Telefono(
  "movil",
  6509876304
)

const datosMarta = new Persona(
  'Marta',
  'Lopez Carrasco',
  33,
  '78523610L',
  new Date(1989, 5, 12),
  'violeta',
  'mujer',
  [primeraResidenciaMarta, segundaResidenciaMarta],
  [mailPersonalMarta, mailTrabajoMarta],
  [telefonoFijoMarta, telefonoMovilMartaPersonal, telefonoMovilMartaTrabajo],
  "Tiene la segunda residencia alquilada todo el año"
);

const primeraResidenciaLaura = new Direccion(
    "Calle Castillo del Ingles",
    3,
    7,
    "C",
    29620,
    "Torremolinos",
    "Malaga"
)

const segundaResidenciaLaura = new Direccion(
  "Calle Casablanca",
  8,
  4,
  "A",
  29620,
  "Torremolinos",
  "Malaga"
)

const mailPersonalLaura = new Mail(
  "personal",
  "mulerovlaura@gmail.com"
)

const mailTrabajoLaura = new Mail(
  "trabajo",
  "mvlaura@outlook.es"
)

const telefonoFijoLaura = new Telefono(
  "fijo",
  977856245
)

const telefonoMovilLaura= new Telefono(
  "movil",
  750369704
)

const datosLaura = new Persona(
  'Laura',
  'Mulero Velez',
  32,
  '45879321D',
  new Date(1990, 2, 8),
  'naranja',
  'mujer',
  [primeraResidenciaLaura, segundaResidenciaLaura],
  [mailPersonalLaura, mailTrabajoLaura],
  [telefonoFijoLaura, telefonoMovilLaura],
  "La segunda residencia es de alquiler"
);

console.log("Contactos antes del cambio:");
console.log(datosSilvia);
console.log(datosMarta);
console.log(datosLaura);

const agenda: Array<Persona> = new Array(datosSilvia, datosMarta, datosLaura );

const dniABuscar: string = "78523694D";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle Mula",
  20,
  6,
  false,
  30565,
  "Torres de Cotillas",
  "Murcia"
)

const nuevoMail = new Mail(
  "trabajo",
  "gswork@gmail.com"
)

const nuevoTelefono = new Telefono(
  "fijo",
  973052146
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosSilvia);
console.log(datosMarta);
console.log(datosLaura);