interface Props {
    number: number
    name: string
    onClick: () => void
}

export const Card = ({ number, name, onClick }: Props) => {

    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`

    const sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;

    return (
        <div className="card-1" onClick={onClick}>
            <div className="face front">
                <div className="contenedor-img">
                    <img src={urlImage} alt="imagen-pokemon" />
                </div>

                <h3 className="number">
                    <span> N.º {number} </span>
                    <span>{name?.toUpperCase()} </span>
                </h3>
            </div>

            <div className="face back">
                <div className="container-sprite">
                    <img className="img-sprite" src={sprites} alt={name?.toUpperCase()} />
                    <h3> {name?.toUpperCase()}</h3>
                </div>
            </div>
        </div>
    );
};

