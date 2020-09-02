import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Ring from "./ficha/components/Ring"
import tierra from "./recursos/tierra.svg"
import aire from "./recursos/aire.svg"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap"

const anillos = [
    {
        name: "Tierra",
        img: tierra,
        attrs: [
            {
                name: "RESISTENCIA",
                value: 2
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
    }
]

const App = () => {
    return <Container>
        <h1> Hello world!! </h1>
        <Ring 
            {...anillos[0]}/>
        <Ring 
            {...anillos[1]}/>
        <Ring 
            {...anillos[3]}/>
        <Ring 
            {...anillos[2]}/>
        {/* Deconstructor. Es igual que poner
            name = "Tierra" etc */}
    </Container>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)