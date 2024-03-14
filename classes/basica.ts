(()=>{
    class Avanger {
        //private name: string;
        //private team: string;
        //public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }
        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
            avgAge: number = 55,
            
        ){
            Avanger.avgAge = avgAge;
        }

        public bio() {
            return `${this.name} ${this.team}`
        }
    }

    const antman: Avanger = new Avanger("Antman", "Capitan", "Scott Lang");
    //console.log(antman);
    //console.log(Avanger.avgAge);
    //console.log(antman.bio());
    //console.log(Avanger.getAvgAge());
})()