import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import AllRings from './ficha/containers/AllRings'

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
    return <Fragment>
        <AllRings />
    </Fragment>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)