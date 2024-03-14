"use strict";
(() => {
    ;
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
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutanPower(id) {
            return `${this.name} is throwing a fire ball!`;
        }
    }
})();
(() => {
    const client = {
        name: "Gustavo",
        age: 24,
        address: {
            id: 1,
            zip: "12345",
            city: "Buenos Aires"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: "Ainhoa",
        age: 2,
        address: {
            id: 2,
            city: "Buenos Aires",
            zip: "12345"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map