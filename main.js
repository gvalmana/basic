"use strict";
var validations;
(function (validations) {
    validations.validateText = (text) => text.length > 3;
    validations.validateDate = (myDate) => isNaN(myDate.valueOf()) ? false : true;
})(validations || (validations = {}));
console.log(validations.validateText('Hello'));
//# sourceMappingURL=main.js.map