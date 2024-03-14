"use strict";
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
//# sourceMappingURL=args-default.js.map