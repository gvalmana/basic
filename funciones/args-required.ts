(() => {
  const fullName = (firstName: string, lastName: string): string => {
    if (!firstName || !lastName) {
      throw new Error("Nombre y apellidos son requeridos");
    }
    return `${firstName} ${lastName}`;
  };

  let noName: string;

  const name = fullName("Gustavo", "Valmaña");

  console.log({ name });
})();
