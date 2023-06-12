export const agregarCeros = (numero) => {
    let numeroConCeros = "";
    if (typeof numero === "string" && numero.length === 1) {
        numeroConCeros = "00" + numero;
    } else if (typeof numero === "string" && numero.length === 2) {
        numeroConCeros = "0" + numero;
    } else if (typeof numero === "string") {
        numeroConCeros = numero;
    }
    return numeroConCeros;
};