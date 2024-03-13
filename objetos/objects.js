"use strict";
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
