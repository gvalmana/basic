"use strict";
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return (firstName + " " + (lastName || "---")).toUpperCase();
        }
        return firstName + " " + (lastName || "---");
    };
    let noName;
    const name = fullName("Gustavo", "Valmaña");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return firstName + " " + (lastName || "---");
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName("Gustavo");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName || !lastName) {
            throw new Error("Nombre y apellidos son requeridos");
        }
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName("Gustavo", "Valmaña");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    let noName;
    const superMan = fullName("Klark", "Joseph", "Kent");
    console.log({ superMan });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiseñal activada";
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viaje en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["super fuerza", "super velocidad", "vuelo"],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viaje en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["super fuerza"],
        getName() {
            return this.name;
        }
    };
    console.log(superman.getName);
})();
(() => {
    let myCustomVariable = "Gustavo";
    console.log(myCustomVariable);
    myCustomVariable = 23;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Bruce Wayne",
        age: 23,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.456;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ["Omega Red", "Red Skull", "Joker"];
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio!");
})();
(() => {
})();
(() => {
    let avenvers = 10;
    console.log(avenvers);
    const villians = 20;
    if (avenvers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos!!");
    }
    avenvers = 123;
    avenvers = Number("55A");
    console.log({ avenvers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Volcán Negro`;
    console.log(`Im ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay valor');
})();
(() => {
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Iron Man';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map