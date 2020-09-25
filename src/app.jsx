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
    return <div >
        <div style={{width: "40%", display: "flex", justifyContent:"center"}}>
            <div style={{width: "85%", height: "150px", display: "flex", flexFlow: "space-between"}}>
                <Ring attrsValues={attrs} imgSrc="https://via.placeholder.com/300" alingLeft={true} />
                <Ring attrsValues={attrs} imgSrc="https://via.placeholder.com/300" alingLeft={false} />
            </div>
        </div>
        <div style={{width: "40%", height: "150px", display: "flex", flexFlow: "space-between"}}>
            <Ring attrsValues={attrs} imgSrc="https://via.placeholder.com/300" alingLeft={true} />
            <Ring attrsValues={attrs} imgSrc="https://via.placeholder.com/300" alingLeft={false} />
        </div>
        <div style={{width: "40%", height: "150px", display: "flex", flexFlow: "space-between"}}>
            <Ring attrsValues={attrs} imgSrc="https://via.placeholder.com/300" alingLeft={false} />
        </div>
    </div>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)