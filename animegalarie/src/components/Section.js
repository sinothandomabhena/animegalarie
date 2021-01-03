import React from 'react'
import tanjiro2 from './images/tanjiro2.png'
import {Link} from 'react-router-dom'

function Section() {
    return (
        <div id="section" className=" p-5 mt-5 text-center">
            <div className="row">
                <div className="col-lg-6">
                    <img id="fav-img" className="" src={tanjiro2} alt="card-img" />
                </div>
                <div id="section-text" className="col-lg-6">
                    <h1 id="section-head">Favourite main character.</h1>
                    <h1 className="">Tanjiro</h1>
                    <h5>Anime: Demon Slayer</h5>
                    <p>
                        Tanjiro Kamado is a fictional character and the main protagonist in Koyoharu Gotōge's manga 
                        Demon Slayer: Kimetsu no Yaiba. Tanjiro is a teenager who goes on a quest to restore the humanity of 
                        his sister, Nezuko, who was turned into a demon after his family was killed by Muzan Kibutsuji following 
                        an attack that resulted the death of his other relatives.
                    </p>
                    <Link to="/favouritecharacter" id="section-button" className="btn">Learn more</Link>
                </div>
            </div>
        </div>
    )
}

export default Section
