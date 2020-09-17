import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Ring from "./ficha/components/Ring"
import tierra from "./recursos/tierra.svg"
import aire from "./recursos/aire.svg"
import LifeBox from "./ficha/components/LifeBox"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return <Fragment>
        <h1> Hello world!! </h1>
        <LifeBox/>
        <Ring 
            attName1="RESISTENCIA" 
            attVal1="2" 
            attName2="VOLUNTAD"
            attVal2="2"
            attImg={tierra}
            attImgAlt="Anillo de tierra"/>
        {/* <Ring /> */}
    </Fragment>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)