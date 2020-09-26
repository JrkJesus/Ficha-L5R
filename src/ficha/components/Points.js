import React, { Fragment } from 'react'
import './Points.css'

const Points = ({total, canUse, used}) => {
    if(canUse < used) used = canUse
    const blockToUse = total - canUse

    const points = []
    for (let i = 0; i < total; i++) {
        points.push(
            <div className="Point_checkbox-round" key={"point-"+i}>
                <input type="checkbox" id={"point-"+i} defaultChecked={i<used} disabled={i>=blockToUse}/>
                <label htmlFor={"point-"+i}></label>
            </div>        
        )
    }

    return <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        {points}
    </div>
}

export default Points