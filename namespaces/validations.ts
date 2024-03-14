namespace validations{
    
    export const validateText = (text: string): boolean =>text.length > 3;

    export const validateDate = (myDate: Date): boolean => isNaN(myDate.valueOf()) ? false : true;
}

console.log(validations.validateText('Hello'));