import React, {Fragment} from "react"
import './Ring.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'

const Ring = ({img, name, attrs, up, left}) => {
    return <Fragment>
        <Row className="Attribute_div" style={left ? up ? {marginLeft: "50px"}:{marginLeft: "-50px"}: up ? {marginLeft: "400px", marginTop: "-300px"}:{marginLeft: "480px"}}>
        {/* <Row className="Attribute_div" style={left ==true & up ? {paddingLeft: "50px"}:{paddingLeft: "-50px"}}> */}
            {left && <Col xs={4} md={3} lg={2} className="Ring_div-attributes">
                {attrs.map((attr, index) => {
                    return <Attribute 
                        key={"attr-"+index} 
                        labelText={attr.name} 
                        value={attr.value}
                        margin={index*10+"px"}
                        left={left}/>
                })}
            </Col>}
            <Col xs={6} md={3} lg={3} style={{padding: 0}}>
                <img 
                    src={img}
                    alt={name}
                    className="Ring_img"/>
            </Col>
            {!left && <Col xs={4} md={3} lg={2} className="Ring_div-attributes">
                {attrs.map((attr, index) => {
                    return <Attribute 
                        key={"attr-"+index} 
                        labelText={attr.name} 
                        value={attr.value}
                        margin={index*10+"px"}/>
                })}
            </Col>}
        </Row>
    </Fragment>
}

const Attribute = ({labelText, value, margin, left}) => {
    return <Row style={left ? {marginRight: margin}:{marginLeft:margin}}>
        {left && <Col xs={9} md={9} lg={9} 
            style={{textAlign: "right", paddingRight: "5px"}}>
        <label 
            htmlFor={"value-" + labelText}>
                {labelText}
        </label>
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