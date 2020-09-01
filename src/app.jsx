import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Ring from "./ficha/components/Ring"

const App = () => {
    return <Fragment>
        <h1> Hello world!! </h1>
        <Ring />
    </Fragment>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)