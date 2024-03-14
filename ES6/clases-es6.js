(()=>{

    class Avenger {
        name;
        power;

        constructor(name= "No name", power= 0){
            this.name = name;
            this.power = power;
        }
    }

    class FlayingAvenger extends Avenger{
        flaying;
        fliying(){

        }

        constructor(name, power){
            super(name, power);
            this.flaying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9001);

    console.log(hulk);

    const falcon = new FlayingAvenger('Falcon', 50);

    console.log(falcon);

})()