(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutanPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        constructor(public name: string, public realName: string, public age: number) {}

        mutanPower(id: number): string {
            return `${this.name} is throwing a fire ball!`;
        }
    }    
})()