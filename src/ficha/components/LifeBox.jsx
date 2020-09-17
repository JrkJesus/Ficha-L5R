import React, {Fragment} from "react"
import { Table } from "react-bootstrap"
import "./LifeBox.css"

const LifeBox = () => {
    return <div className="LifeBox_Table-size-position">
        <h4>HERIDAS</h4>
        <Table className="whiteBack">
            <thead>
                <tr>
                    <th className="blackBack">RANGO DE HERIDAS</th>
                    <th className="grayBack">TOTAL</th>
                    <th className="whiteBack">ACTUALES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="blackBack">NORMAL(+0)</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr>
                <tr>
                    <td className="blackBack">MAGULLADO(+3)</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr><tr>
                    <td className="blackBack">LESIONADO(+5)</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr><tr>
                    <td className="blackBack">HERIDO(+10)</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr><tr>
                    <td className="blackBack">MALHERIDO(+15)</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr><tr>
                    <td className="blackBack">TULLIDO(+20)</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr><tr>
                    <td className="blackBack">CAIDO(+40)</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr><tr>
                    <td className="blackBack">INCONSCIENTE</td>
                    <td className="grayBack"></td>
                    <td className="whiteBack"></td>
                </tr>
            </tbody>
        </Table>
    </div>
}

export default LifeBox