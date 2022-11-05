System.register(["./persona", "./direccion", "./mail", "./telefono"], function (exports_1, context_1) {
    "use strict";
    var persona_1, direccion_1, mail_1, telefono_1, primeraResidenciaSilvia, segundaResidenciaSilvia, mailSilvia, telefonoFijoSilvia, telefonoMovilSilvia, datosSilvia, primeraResidenciaMarta, segundaResidenciaMarta, mailPersonalMarta, mailTrabajoMarta, telefonoFijoMarta, telefonoMovilMartaPersonal, telefonoMovilMartaTrabajo, datosMarta, primeraResidenciaLaura, segundaResidenciaLaura, mailPersonalLaura, mailTrabajoLaura, telefonoFijoLaura, telefonoMovilLaura, datosLaura, agenda, dniABuscar, personaAEditar, nuevaDireccion, nuevoMail, nuevoTelefono;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (persona_1_1) {
                persona_1 = persona_1_1;
            },
            function (direccion_1_1) {
                direccion_1 = direccion_1_1;
            },
            function (mail_1_1) {
                mail_1 = mail_1_1;
            },
            function (telefono_1_1) {
                telefono_1 = telefono_1_1;
            }
        ],
        execute: function () {
            primeraResidenciaSilvia = new direccion_1.Direccion("Calle Vicente Ramon", 20, 6, "B", 0o3540, "Alicante", "Alicante");
            segundaResidenciaSilvia= new direccion_1.Direccion("Calle Horaci", 4, false, false, 0o3016, "San Juan", "Alicante");
            mailSilvia = new mail_1.Mail("personal", "Silviagarcia@gmail.com");
            telefonoFijoSilvia = new telefono_1.Telefono("fijo", 9333333);
            telefonoMovilSilvia = new telefono_1.Telefono("movil", 690405691);
            datosSilvia  = new persona_1.Persona('Silvia', 'Garcia', 23, '78523694D', new Date(1998, 5, 10), 'rosa', 'mujer', [primeraResidenciaSilvia, segundaResidenciaSilvia], [mailSilvia], [telefonoFijoSilvia, telefonoMovilSilvia], "Trabaja en la localidad de la segunda residencia");
            console.log(datosSilvia);
            primeraResidenciaMarta = new direccion_1.Direccion("Calle Quevedo", 2, 6, "A", 28015, "Chamberi", "Madrid");
            segundaResidenciaMarta = new direccion_1.Direccion("Calle Miguel ANgel", 11, 1, "A", 28010, "Madrid", "Madrid");
            mailPersonalMarta = new mail_1.Mail("personal", "lopezmarta@hotmail.com");
            mailTrabajoMarta = new mail_1.Mail("trabajo", "work@marta.com");
            telefonoFijoMarta = new telefono_1.Telefono("fijo", 9897514569);
            telefonoMovilMartaPersonal = new telefono_1.Telefono("movil", 666859710);
            telefonoMovilMartaTrabajo = new telefono_1.Telefono("movil", 6509876304);
            datosMarta = new persona_1.Persona('Marta', 'Lopez Carrasco', 33, '78523610L', new Date(1989, 5, 12), 'violeta', 'mujer', [primeraResidenciaMarta, segundaResidenciaMarta], [mailPersonalMarta, mailTrabajoMarta], [telefonoFijoMarta, telefonoMovilMartaPersonal, telefonoMovilMartaTrabajo], "Tiene la segunda residencia alquilada todo el año");
            console.log(datosMarta);
            primeraResidenciaLaura = new direccion_1.Direccion("Calle Castillo del Ingles", 3, 7, "C", 29620, "Torremolinos", "Malaga");
            segundaResidenciaLaura = new direccion_1.Direccion("Calle Casablanca", 8, 4, "A", 29620, "Torremolinos", "Malaga");
            mailPersonalLaura = new mail_1.Mail("personal", "mulerovlaura@gmail.com");
            mailTrabajoLaura = new mail_1.Mail("trabajo", "mvlaura@outlook.es");
            telefonoFijoLaura = new telefono_1.Telefono("fijo", 977856245);
            telefonoMovilLaura = new telefono_1.Telefono("movil", 750369704);
            datosLaura= new persona_1.Persona('Laura', 'Mulero Velez', 32, '45879321D', new Date(1990, 2, 8), 'naranja', 'mujer', [primeraResidenciaLaura, segundaResidenciaLaura], [mailPersonalLaura, mailTrabajoLaura], [telefonoFijoLaura, telefonoMovilLaura], "La segunda residencia es de alquiler");
            console.log(datosLaura);
            agenda = new Array(datosSilvia, datosMarta, datosLaura);
            dniABuscar = "78523694D";
            personaAEditar = agenda.find(persona => persona.dni === dniABuscar);
            nuevaDireccion = new direccion_1.Direccion("Calle Mula", 20, 6, false, 30565, "Torres de Cotillas", "Murcia");
            nuevoMail = new mail_1.Mail("trabajo", "gswork@gmail.com");
            nuevoTelefono = new telefono_1.Telefono("fijo", 973052146);
            personaAEditar.agregarNuevaDireccion(nuevaDireccion);
            personaAEditar.agregarNuevoMail(nuevoMail);
            personaAEditar.agregarNuevoTelefono(nuevoTelefono);
            console.log(datosSilvia);
        }
    };
});
