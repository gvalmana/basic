(() => {

    class Avenger {
        
        constructor(
            public name: string,
            public realName: string,
        ){
            //console.log("Constructor Avanger invocado");
        }
        protected getFullname() { `${this.name} ${this.realName}`}
    }

    class Xmen extends Avenger {

        constructor(name: string, realName: string,public isMutan: boolean){
            super(name, realName);
            //console.log("Constructor Xmen invocado");
        }

        public getFullnameDesdeXmen() {
            console.log(this.getFullname());
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string){
            if (name.length < 3) {
                throw new Error("El nombre debe ser mayor a 3 caracteres");
            }
            this.name = name;
        }
    }

    const wolverine: Xmen = new Xmen("Wolverine", "Logan", true);
    //console.log(wolverine);
    //console.log(wolverine.getFullnameDesdeXmen());
    //console.log(wolverine.fullName);
    wolverine.fullName = "Gustavo";
    //console.log(wolverine.fullName);
})()