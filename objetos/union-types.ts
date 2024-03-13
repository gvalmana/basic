(()=>{
    type Hero = {
        name: string;
        age?:number;
        powers: number[];
        getName?: () => string;
    };

    let myCustomVariable: string | number | Hero = "Gustavo";
    console.log(myCustomVariable);
    myCustomVariable = 23;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: "Bruce Wayne",
        age: 23,
        powers: [1]
    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})()