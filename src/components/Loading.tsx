import { Player } from '@lottiefiles/react-lottie-player'
import LoadingJson from '../assets/pokemon-loading.json'
import './Loading.css'

export const Loading = () => {
    return (
        <main className="player-container">

            <Player
                src={LoadingJson}
                className="player-loading"
                loop
                autoplay
            />

        </main>

    )
}
