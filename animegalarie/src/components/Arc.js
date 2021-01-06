import React from 'react'
import pain from './images/pain.png'

function Arc() {
    return (
        <div id="arc" className=" p-5 mt-5 text-center">
            <div className="row">
                
                <div id="arc-text" className="col-lg-5 mt-5">
                    <h1 id="arc-head">Favourite anime arc.</h1>
                    <h1 className="">Pain's Assault</h1>
                    <h5>Anime: Naruto</h5>
                    <p>
                        Pain's Assault (ペイン強襲, Pein Kyōshū), known as Two Saviours (二人の救世主, Futari no Kyūseishu) 
                        in the anime, is an arc from Part II of the series. This arc sees Pain's attack on Konohagakure to 
                        find Naruto Uzumaki.
                    </p>
                </div>

                <div className="col-lg-6">
                    <img id="fav-img" className="" src={pain} alt="card-img" />
                </div>
            </div>
        </div>
    )
}

export default Arc
