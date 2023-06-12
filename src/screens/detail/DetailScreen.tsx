import { useParams } from 'react-router-dom'
import { getBackgroundBadge, getBackgroundGradient } from '../../utils/colores'
import './DetailScreen.css'

import { usePokemonDetail } from '../../hooks/usePokemonDetail'
import { ArrowNavLeft } from '../../components/ArrowNavLeft';
import { ArrowNavRight } from '../../components/ArrowNavRight';



export const DetailScreen = () => {

    const { number } = useParams()

    const { pokemon, description } = usePokemonDetail(Number(number))

    return (
        <div className='main-container' style={getBackgroundGradient(pokemon?.firstType, pokemon?.secondType)} >

            <div className='container-details'>
                <div className='prev-container'>
                    <ArrowNavLeft number={number} type={pokemon?.firstType} />
                </div>
                <div className='detail-pokemon'>
                    <div className='detail-imagen-title'>
                        <div className='title-detail'>

                            <h1>{pokemon?.name.toUpperCase()}</h1>
                            <h1># {number}</h1>
                        </div>
                        <div >
                            <img src={pokemon?.imageDefault} alt="imagen-pokemon-principal" />
                        </div>
                    </div>
                    <div className='detail-info'>
                        <div className='title-description'>
                            <h2>
                                Descripcion
                            </h2>
                            <p className='description'>{description} </p>
                        </div>

                        <div className='detalle-info'>

                            <h2>Tipo</h2>
                            <div className="tipos-container">
                                <div className='tipo' style={getBackgroundBadge(pokemon?.firstType)}>{pokemon?.firstType.toUpperCase()}</div>
                                {
                                    pokemon?.secondType &&
                                    <div className='tipo' style={getBackgroundBadge(pokemon?.secondType)}>{pokemon?.secondType.toUpperCase()}</div>
                                }
                            </div>
                            <div className='container-height' >
                                <div className='info-height'>
                                    <h2>Altura</h2>
                                    <p> {Number(pokemon?.height) / 10} Mt.</p>
                                </div>

                                <div className='info-weight'>
                                    <h2>Peso</h2>
                                    <p> {Number(pokemon?.weight) / 10}  Kg.</p>
                                </div>
                            </div>
                        </div>
                        <div className='sprites'>
                            <h2>Formas</h2>
                            <div className='sprites-image'>
                                <div className='sprite-normal'>
                                    <img className='poke-img-detail' src={pokemon?.imageDefault} alt={pokemon?.name} />
                                    <h3>Normal </h3>
                                </div>
                                <div className='sprite-shiny'>
                                    <img className='poke-img-detail' src={pokemon?.imageShiny} alt={pokemon?.name} />
                                    <h3>Shiny</h3>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
                <div className='next-container' style={{ color: '#4A235A' }}>
                    <ArrowNavRight number={number} type={pokemon?.firstType} />
                </div>

            </div >
            <div className='arrow-container'>
                <ArrowNavLeft number={number} type={pokemon?.firstType} />
                <ArrowNavRight number={number} type={pokemon?.firstType} />
            </div>
        </div >
    )
}
