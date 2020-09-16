import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Ring from './ficha/components/Ring'

const attrs = [
    {
        label: "Constitución",
        value: "2"
    },
    {
        label: "Fuerza",
        value: "2"
    }
]

const App = () => {
    return <div style={{width: "30%"}}>
        <Ring attrsValues={attrs} imgSrc="https://via.placeholder.com/150" alingLeft={true} />
        <Ring attrsValues={attrs} imgSrc="https://via.placeholder.com/150" alingLeft={false} />
    </div>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)