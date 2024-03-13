(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  let noName: string;

  const superMan = fullName("Klark","Joseph", "Kent");

  console.log({ superMan });
})();
