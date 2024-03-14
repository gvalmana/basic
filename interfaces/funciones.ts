(()=>{

    interface addTwoNumbers{
        (a: number, b: number): number;
    }

    let addNumbersFuntion: addTwoNumbers;
    addNumbersFuntion = (a: number, b: number) => {
        return a + b;
    }

})()