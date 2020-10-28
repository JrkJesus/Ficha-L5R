import React, { Fragment } from 'react'
import './Attribute.css'

const Attribute = ({attrs, flexDirection, direction, color}) => {
    return <div className={"Ring_divAttr-format Ring_divAttr-"+direction.toLowerCase()}>
        { Object.keys(attrs).map((label, indx) => {
            return ( 
                <div key={"attr_"+label+"_"+indx} 
                    style={{width: "100%", flexDirection: flexDirection}} 
                    className={"Attribute_mapDiv-flex"} > 

                    <input type="number" value={attrs[label]} disabled={true} style={{borderColor: color}} className="Attribute_inputNumber-Round" />
                    <label className={"Attribute_label-AttrFormat Attribute_label-text"+direction}>{label}</label>        
                </div>
            )
        })}
    </div>
}

export default Attribute