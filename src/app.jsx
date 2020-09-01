import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Ring from "./ficha/components/Ring"
import tierra from "./recursos/tierra.svg"
import aire from "./recursos/aire.svg"

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
        ]
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
        ]
    },
    {
        name: "Fuego",
        img: aire,
        attrs: [
            {
                name: "AGILIDAD",
                value: 2
            },
            {
                name: "INTELIGENCIA",
                value: 2
            }
        ]
    },
    {
        name: "Agua",
        img: aire,
        attrs: [
            {
                name: "FUERZA",
                value: 2
            },
            {
                name: "PERCEPCION",
                value: 2
            }
        ]
    }
]

const App = () => {
    return <Fragment>
        <h1> Hello world!! </h1>
        <Ring 
            {...anillos[0]}/>
        <Ring 
            {...anillos[1]}/>
        {/* Deconstructor. Es igual que poner
            name = "Tierra" etc */}
    </Fragment>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)