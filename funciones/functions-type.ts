(() => {
  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello ${name}`;
  const saveTheWorld = (): string => `The world is saved!`;

  let myFunction: () => string;
  myFunction = addNumber;
  console.log(myFunction(1, 2));
  myFunction = greet;
  console.log(myFunction("Clark Kent"));
  myFunction = saveTheWorld;
  console.log(myFunction());
})();
