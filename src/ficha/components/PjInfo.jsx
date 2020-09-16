import React, {Fragment} from "react"
import { Form } from "react-bootstrap"
import "./PjInfo.css"

const PjInfo = ({Nombre, Familia, Escuela, Bonificador, Reconocimiento}) => {
    return <Form className="PjInfo_form-position">
        <Form.Row>
            <Line labelText="Nombre" value={Nombre} valueType="text"/>
            <Line labelText="Familia" value={Familia} valueType="text"/>
        </Form.Row>
        <Form.Row>
            <Line labelText="Escuela" value={Escuela} valueType="text"/>
            <Line labelText="Bonificador Familia" value={Bonificador} valueType="text"/>
            <Line labelText="Reconocimiento" value={Reconocimiento} valueType="number"/>
        </Form.Row>
    </Form>
}

const Line = ({labelText, value, valueType}) => {
    return <Fragment>
        <Form.Group>
            <Form.Label htmlFor={"value-"+labelText}>
                {labelText}
            </Form.Label>
            <Form.Control 
                type={valueType}
                name={"value-" + labelText}
                id={"value-" + labelText}
                defaultValue={value}
            />
        </Form.Group>
    </Fragment>   
}

export default PjInfo