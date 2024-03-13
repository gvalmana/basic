"use strict";
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
