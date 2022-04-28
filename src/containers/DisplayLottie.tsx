import Lottie from 'react-lottie-player'

function DisplayLottie(prop: any) {

    return (
        <Lottie 
        loop
        animationData={prop.lottie}
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
    )
}

export default DisplayLottie