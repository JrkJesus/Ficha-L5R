import React, { Fragment } from 'react'
import './Points.css'
const TOTAL_POINTS = 9
const Points = ({canUse, used, color}) => {
    if(canUse < used) used = canUse
    const blockToUse = TOTAL_POINTS - canUse

    const points = []
    for (let i = 0; i < TOTAL_POINTS; i++) {
        points.push(
            <div className="Point_checkbox-round" key={"point-"+i}>
                <input type="checkbox" id={"point-"+i} defaultChecked={i<used} disabled={i>=blockToUse}/>
                <label htmlFor={"point-"+i} style={{borderColor: color, borderWidth: "2px"}}></label>
            </div>        
        )
    }

    return <Fragment> 
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            {points}
        </div>
    </Fragment>
}

export default Points