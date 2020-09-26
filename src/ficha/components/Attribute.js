import React, { Fragment } from 'react'
import './Attribute.css'

const Attribute = ({attrs, flexDirection, direction}) => {
    return <Fragment>
        { Object.keys(attrs).map((label, indx) => {
            return ( 
                <div key={"attr_"+label+"_"+indx} 
                    style={{width: "100%", flexDirection: flexDirection}} 
                    className={"Attribute_mapDiv-flex " + (indx== 1 ? "Attribute_mapDiv-"+direction : "")} > 

                    <input type="number" defaultValue={attrs[label]} className="Attribute_inputNumber-Round" />
                    <label className={"Attribute_label-AttrFormat Attribute_label-text"+direction}>{label}</label>        
                </div>
            )
        })}
    </Fragment>
}

export default Attribute