import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Ring from "./ficha/components/Ring"
import tierra from "./recursos/tierra.svg"
import aire from "./recursos/aire.svg"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap"

const anillos = [
    {
        name: "Tierra",
        img: tierra,
        attrs: [
            {
                name: "RESISTENCIA",
                value: 3
            },
            {
                name: "VOLUNTAD",
                value: 2
            }
        ],
        up: true,
        left: true
    },
    {
        name: "Aire",
        img: aire,
        attrs: [
            {
                name: "CONSCIENCIA",
                value: 2
            },
            {
                name: "REFLEJOS",
                value: 2
            }
        ],
        up: false,
        left: true
    },
    {
        name: "Agua",
        img: tierra,
        attrs: [
            {
                name: "FUERZA",
                value: 2
            },
            {
                name: "PERCEPCION",
                value: 2
            }
        ],
        up: true,
        left: false
    },
    {
        name: "Fuego",
        img: tierra,
        attrs: [
            {
                name: "AGILIDAD",
                value: 2
            },
            {
                name: "INTELIGENCIA",
                value: 2
            }
        ],
        up: false,
        left: false
    },
]

const App = () => {
    return <Fragment>
        <h1> Hello world!! </h1>
        <Row style={{width: "50%", gridColumnGap: "5px"}}>
            <Col >
                    <Ring {...anillos[0]}/>
            </Col>
            <Col >
                    <Ring {...anillos[2]}/>
            </Col>
        </Row>
        <Row style={{width: "50%", gridColumnGap: "50px"}}>
            <Col >
                    <Ring {...anillos[1]}/>
            </Col>
            <Col> 
                    <Ring {...anillos[3]}/>
            </Col>
        </Row>
        
        {/* Deconstructor. Es igual que poner
            name = "Tierra" etc */}
    </Fragment>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)