// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Movile {
  encender: boolean;
  velocidadMaxima: number;
  acelerar: () => void;
}

const conducirBatimovil = (auto: Movile): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Movile = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface IGuason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: IGuason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: IGuason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion

interface FCiudadGotica {
  (ciudadanos: string[]): number;
}

const ciudadGotica: FCiudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}
class Persona implements IPersona {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}

  imprimirBio(): void {
    console.log(`Name: ${this.nombre}`);
  }
}
