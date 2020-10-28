import React, { Fragment } from 'react'
import './AllRings.css'
import anillos from '../../data/anillos.json'
import Ring from '../components/Ring'

const AllRings = () => {
    return <Fragment>
        <div className="AllRings_div-row">
            <Ring {...anillos.tierra} row={1} align={{top: true, left: true}} />
            <Ring {...anillos.aire} row={1} align={{top: true, left: false}} />
        </div>
        <div className="AllRings_div-row">
            <Ring {...anillos.agua} row={2} align={{top: false, left: true}} />
            <Ring {...anillos.fuego} row={2} align={{top: false, left: false}} />
        </div>
        <div className="AllRings_div-row" style={{marginTop: "-20px"}}>
            <Ring {...anillos.vacio} row={3} align={{top: false, left: false}} />
        </div>
    </Fragment>
}

export default AllRings