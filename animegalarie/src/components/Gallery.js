import React from 'react'
import Image from './Image'
import goku from './goku.jpg'
import deku from './deku.jpg'
import demonslayer from './demonslayer.jpg'
import naruto from './naruto.jpg'
import aot from './aot.jpg'
import tg from './tg.jpg'

function Gallery() {
    return (
        <div className="row justify-content-center my-5">
            <h1 id="gallery-head" className="col-lg-12 text-center mb-5">Favourite anime.</h1>
            <Image source={goku} name="Dragon Ball Z"/>
            <Image source={deku} name="Hero Academia"/>
            <Image source={demonslayer} name="Demon Slayer"/>
            <Image source={naruto} name="Naruto Shippuden"/>
            <Image source={aot} name="Attack on Titan"/>
            <Image source={tg} name="Tokyo Ghoul"/>
        </div>
    )
}

export default Gallery
