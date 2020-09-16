import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Ring from "./ficha/components/Ring"
import PjInfo from "./ficha/components/PjInfo"
import tierra from "./recursos/tierra.svg"
import aire from "./recursos/aire.svg"
import "bootstrap/dist/css/bootstrap.min.css"

const pjDataInfo = [
    {
        Nombre: "Tai-lo",
        Familia: "Ise-Zumi",
        Escuela: "",
        Bonificador: "no ce",
        Reconocimiento: 145,
    }
]

const App = () => {
    return <Fragment>
        <PjInfo {...pjDataInfo[0]}/>
        <Ring 
            attName1="RESISTENCIA" 
            attVal1="2" 
            attName2="VOLUNTAD"
            attVal2="2"
            attImg={tierra}
            attImgAlt="Anillo de tierra"
            className="col-sm-8"/>
        {/* <Ring /> */}
    </Fragment>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)