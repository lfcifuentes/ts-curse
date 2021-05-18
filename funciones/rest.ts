const carta_postres = (postre:string, ...frutas:string[]) :void => {
    console.log(
        postre,
        frutas
    );
}
carta_postres(
    "milo",
    "leche",
    "milo"
);