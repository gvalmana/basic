(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return firstName + " " + (lastName || "---");
    return `${firstName} ${lastName}`;
  };

  let noName: string;

  const name = fullName("Gustavo");

  console.log({ name });
})();
