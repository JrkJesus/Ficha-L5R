import React, { Fragment } from 'react'
import './AllRings.css'
import anillos from '../../data/anillos.json'
import Ring from '../components/Ring'

const AllRings = () => {
    return <Fragment>
        <div className="AllRings_div-row">
            <div style={{width: "85%", height: "150px", display: "flex", flexFlow: "space-between"}}>
                <Ring {...anillos.tierra} alingLeft={true} />
                <Ring {...anillos.aire} alingLeft={false} />
            </div>
        </div>
        <div className="AllRings_div-row">
            <Ring {...anillos.agua} alingLeft={true} />
            <Ring {...anillos.fuego} alingLeft={false} />
        </div>
        <div className="AllRings_div-row">
              <Ring {...anillos.vacio} alingLeft={false} />
        </div>
    </Fragment>
}

export default AllRings