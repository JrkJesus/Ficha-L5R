import React, {Fragment} from "react"
import './Ring.css'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types' 

const Ring = ({img, name, attrs, up, left}) => {    
    return <Row style={{margin: 0}}  className="justify-content-md-center">
            {left && 
            <Col className="Ring_div-attributes">
                {attrs.map((attr, index) => {
                    return <Attribute 
                        key={"attr-"+index} 
                        labelText={attr.name} 
                        value={attr.value}
                        margin={index*10+"px"}
                        left={left}/>
                })}
            </Col>}
            <Col style={{padding: 0}}>
                <img 
                    src={img}
                    alt={name}
                    className="Ring_img"/>
            </Col>
            {!left && <Col className="Ring_div-attributes">
                {attrs.map((attr, index) => {
                    return <Attribute 
                        key={"attr-"+index} 
                        labelText={attr.name} 
                        value={attr.value}
                        margin={index*10+"px"}/>
                })}
            </Col>}
    </Row>
}

Ring.propTypes = {
    img: PropTypes.string, 
    name: PropTypes.string, 
    attrs: PropTypes.array, 
    up: PropTypes.bool, 
    left: PropTypes.bool
}

Ring.defaultProps = {
    img: "/recursos/tierra.svg", 
    name: "", 
    attrs: [], 
    up: false, 
    left: false
}

const Attribute = ({labelText, value, margin, left}) => {
    return <Row style={left ? {marginRight: margin}:{marginLeft:margin}}>
        {left && 
            <Col xs={9} md={9} lg={9} style={{textAlign: "right", paddingRight: "5px"}}>
                <label htmlFor={"value-" + labelText}> {labelText}</label>
            </Col>}
        <Col xs={2} md={2} lg={2} style={{paddingLeft: 0}}>
            <input 
                type="number"
                name={"value-" + labelText}
                id={"value-" + labelText}
                defaultValue={value}
                className="Attribute_input-number"
            />
        </Col>
        {!left && <Col xs={9} md={9} lg={9} 
            style={{textAlign: "left", paddingLeft: "10px"}}>
        <label 
            htmlFor={"value-" + labelText}>
                {labelText}
        </label>
        </Col>}
    </Row>
}

export default Ring