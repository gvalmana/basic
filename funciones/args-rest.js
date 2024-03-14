"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    let noName;
    const superMan = fullName("Klark", "Joseph", "Kent");
    console.log({ superMan });
})();
//# sourceMappingURL=args-rest.js.map