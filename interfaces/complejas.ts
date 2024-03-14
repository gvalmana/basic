(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: "Gustavo",
        age: 24,
        address: {
            id: 1,
            zip: "12345",
            city: "Buenos Aires"
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: "Ainhoa",
        age: 2,
        address: {
            id: 2,
            city: "Buenos Aires",
            zip: "12345"
        },
        getFullAddress(id: string) {
            return this.address.city;
        }        
    }
})();