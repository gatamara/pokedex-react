export const colors = [
    { tipo: "fire", primary: "#ff3333", secondary: "#ff6666", fontColor: "#000000" },
    { tipo: "water", primary: "#3b6cff", secondary: "#6e92ff", fontColor: "#ffffff" },
    { tipo: "grass", primary: "#00cd33", secondary: "#01ff40", fontColor: "#ffffff" },
    { tipo: "poison", primary: "#613e5e", secondary: "#80527c", fontColor: "#ffffff" },
    { tipo: "bug", primary: "#cece00", secondary: "#e8e800", fontColor: "#000000" },
    { tipo: "flying", primary: "#add8e6", secondary: "#d4ebf2", fontColor: "#000000" },
    { tipo: "normal", primary: "#A8A77A", secondary: "#bcbb99", fontColor: "#000000" },
    { tipo: "ground", primary: "#994d00", secondary: "#cc6700", fontColor: "#ffffff" },
    { tipo: "electric", primary: "#e6e600", secondary: "#ffff1a", fontColor: "#380B61" },
    { tipo: "fairy", primary: "#F06292", secondary: "#f491b2", fontColor: "#000000" },
    { tipo: "psychic", primary: "#8332c3", secondary: "#9b55d3", fontColor: "#ffffff" },
    { tipo: "steel", primary: "#5d5d5d", secondary: "#777777", fontColor: "#ffffff" },
    { tipo: "rock", primary: "#85684a", secondary: "#a5825d", fontColor: "#ffffff" },
    { tipo: "ice", primary: "#b3ebf2", secondary: "#c9f1f6", fontColor: "#263238" },
    { tipo: "ghost", primary: "#262626", secondary: "#404040", fontColor: "#ffffff" },
    { tipo: "dragon", primary: "#4000ff", secondary: "#6633ff", fontColor: "#ffffff" },
    { tipo: "fighting", primary: "#A93226", secondary: "#be382b", fontColor: "#ffffff" },
    { tipo: "dark", primary: "#705746", secondary: "#8f6f5a", fontColor: "#ffffff" },
];

export const getBackgroundGradient = (type?: string, type2?: string) => {
    if (!type) return // sale de la funcion y no sigue ejecutando porque el parametro esta vacio, es decir, es unfeined

    if (type && !type2) { // si hay tipo 1 y no hay tipo 2
        const color = colors.find(color => color.tipo === type)
        if (!color) return
        const style = { backgroundImage: `linear-gradient(45deg, ${color.primary} 0%, ${color.secondary} 55%, #ffffff 100%)` }
        return style
    }

    if (type && type2) { // si hay tipo 1 y hay tipo 2

        const color = colors.find(color => color.tipo === type)
        const color2 = colors.find(color => color.tipo === type2)

        if (!color && !color2) return

        const style = { backgroundImage: `linear-gradient(45deg, ${color?.primary} 0%, ${color2?.primary} 100%)` }
        //background-color: #4158D0;background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

        return style
    }
}

export const getBackgroundBadge = (type?: string) => {
    if (!type) return
    const color = colors.find(color => color.tipo === type)
    if (!color) return
    const style = { backgroundColor: color.primary, color: color.fontColor }
    return style
}

export const getFontColor = (type?: string) => {
    if (!type) return
    const color = colors.find(color => color.tipo === type)

    return color?.fontColor
}