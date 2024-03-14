(() => {
  type Avenger = {
    nick: string;
    iroman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avenger = {
    nick: "Samuel L. Jackson",
    iroman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };
  const printAvenger = ( {vision, ...others}: Avenger) => {
    console.log(vision);
    console.log(others);
  };

  const avengersArr: [string, boolean, number] = ["Cap America", true, 1500];
  const [capi,ironman, seriaUnNumero] = avengersArr;
  console.log(ironman, capi);
})();
