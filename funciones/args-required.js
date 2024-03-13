"use strict";
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
