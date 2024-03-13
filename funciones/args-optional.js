"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return firstName + " " + (lastName || "---");
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName("Gustavo");
    console.log({ name });
})();
