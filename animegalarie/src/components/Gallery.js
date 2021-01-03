import React from 'react'
import Image from './Image'
import goku from './images/goku.jpg'
import demonslayer from './images/demonslayer.jpg'
import naruto from './images/naruto.jpg'

function Gallery() {
    return (
        <div id="gallery-container" className="row justify-content-center my-5">
            <h1 id="gallery-head" className="col-lg-12 text-center mt-5">Favourite anime.</h1>
            <Image source={goku} name="Dragon Ball Z"/>
            <Image source={demonslayer} name="Demon Slayer"/>
            <Image source={naruto} name="Naruto Shippuden"/>
        </div>
    )
}

export default Gallery
