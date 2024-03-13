(() => {
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    if (upper) {
      return (firstName + " " +(lastName || "---")).toUpperCase();  
    }
    return firstName + " " +(lastName || "---");
  };

  let noName: string;

  const name = fullName("Gustavo","Valmaña");

  console.log({ name });
})();
