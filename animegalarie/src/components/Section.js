import React from 'react'
import tanjiro from './tanjiro.jpg'
import tanjiro2 from './tanjiro2.png'

function Section() {
    return (
        <div id="section" className=" p-5 mt-5 text-center">
            {/* <h1>Favourite main character.</h1> */}
            <div className="row">
                <div className="col-lg-6">
                    <img id="fav-img" className="mt-1" src={tanjiro2} alt="card-img" />
                </div>
                <div id="section-text" className="col-lg-4">
                    <h1 className="">Tanjiro</h1>
                    <h5>Anime: Demon Slayer</h5>
                    <p>
                        Tanjiro Kamado is a fictional character and the main protagonist in Koyoharu Gotōge's manga 
                        Demon Slayer: Kimetsu no Yaiba. Tanjiro is a teenager who goes on a quest to restore the humanity of 
                        his sister, Nezuko, who was turned into a demon after his family was killed by Muzan Kibutsuji following 
                        an attack that resulted the death of his other relatives.
                    </p>
                    <button id="section-button" className="btn">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Section
