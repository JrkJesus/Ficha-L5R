import React, {Fragment} from "react"
import './Ring.css'



const Ring = ({attName1, attVal1, attName2, attVal2, attImg, attImgAlt}) => {
    return <Fragment>
        <div className="Attribute_div">
            <Attribute labelText={attName1} value={attVal1}/>
            <Attribute labelText={attName2} value={attVal2}/>
        </div>
        <img 
            src={attImg}
            alt={attImgAlt}
            className="Ring_img"/>
    </Fragment>
}

const Attribute = ({labelText, value}) => {
    return <Fragment>
        <label 
            htmlFor={"value-" + labelText}>
                {labelText}
        </label>
        <input 
            type="number"
            name={"value-" + labelText}
            id={"value-" + labelText}
            value={value}
            className="Attribute_input-number"
        />
        <br></br>
    </Fragment>
}

export default Ring