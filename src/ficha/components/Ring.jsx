import React, {Fragment} from "react"
import './Ring.css'

const Ring = () => {
    return <Fragment>
        <img 
            src="https://via.placeholder.com/150" 
            alt="Anillo de tierra" 
            style={{borderRadius: "50%"}}/>
        <Attribute labelText="Resistencia" value="2"/>
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
    </Fragment>
}


export default Ring