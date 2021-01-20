import React from "react";
import preloader from './../../assets/img/load.gif'

type PreloaderType = {

}

let Preloader: React.FC<PreloaderType> = (props) => {
    return (
        <>
            <img src={preloader} />
        </>
    )
}

export default Preloader;