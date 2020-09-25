import React, {Fragment} from 'react'
import './Ring.css'

const Ring = ({attrsValues, imgSrc, alingLeft })  => {

    return <div style={{height: "100%", width: "100%", display: "inline-block"}}>
        { alingLeft && <div className="Ring_divAttr-format">
            { attrsValues.map((attr, indx) => {
                return <div key={"attr_"+attr.label+"_indx"} style={{width: "100%", flexDirection: "row-reverse"}} className={"Ring_mapDiv-flex " + (indx== 1 ? "Ring_mapDiv-right" : "")} > 
                    <input type="number" defaultValue={attr.value} className="Ring_inputNumber-Round" />
                    <label className="Ring_label-AttrFormat Ring_label-textRight">{attr.label}</label>
                </div>
            })}
        </div> }
        <div className="Ring_divImg-position">
            <img src={imgSrc} className={"Ring_img-round " + (alingLeft ? "Ring_img-left" : "Ring_img-right")}/>
        </div> 
        { !alingLeft && <div className="Ring_divAttr-format Ring_divAttr-right">
            { attrsValues.map((attr, indx) => {
                return <div key={"attr_"+attr.label+"_indx"} style={{width: "100%", flexDirection: "row"}} className={"Ring_mapDiv-flex " + (indx == 1 ? "Ring_mapDiv-left" : "")} > 
                    <span className="number-wrapper"><input type="number" defaultValue={attr.value} className="Ring_inputNumber-Round" /></span>
                    <label className="Ring_label-AttrFormat Ring_label-textLeft">{attr.label}</label>
                </div>
            })}
        </div> }
    </div>
}


export default Ring