(() => {
    let avenvers: number = 10;
    console.log(avenvers);
    const villians: number = 20;
    if (avenvers < villians) {
        console.log("Estamos en problemas");
    } else {
        console.log("Nos salvamos!!");
    }

    avenvers = 123;
    avenvers = Number("55A");
    console.log({ avenvers });
})();