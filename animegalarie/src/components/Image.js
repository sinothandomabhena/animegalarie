import React from 'react'

function Image(props) {
    return (
        <div id="anime-card" className="card col-lg-3 col-sm-8 m-3 shadow-sm">
            <img id="card-img" className="card-img-top px-0" src={props.source} alt="card-img" />
            <div style={{"z-index":"99"}} className="card-body text-center">
                <h4 className="card-title font-weight-bold">{props.name}</h4>
                <button id="card-button" className="btn">Learn more</button>
            </div>
        </div>
    )
}

export default Image
