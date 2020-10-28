import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import AllRings from './ficha/containers/AllRings'

const App = () => {
    return <Fragment>
        <AllRings />
    </Fragment>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)