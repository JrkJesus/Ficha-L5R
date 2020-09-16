import React, {Fragment} from 'react'
import './Ring.css'

const Ring = ({attrsValues, imgSrc, alingLeft })  => {

    return <div style={{height: "100%", width: "100%"}}>
        { alingLeft && <div className="Ring_div-AttrFormat">
            { attrsValues.map((attr, indx) => {
                return <div key={"attr_"+attr.label+"_indx"} style={{width: "100%"}} className={(indx== 1 ? "Ring-mapDiv-2nd" : "")} > 
                    <label className="Ring_label-AttrFormat Ring_label-textRight">{attr.label}</label>
                    <input type="number" defaultValue={attr.value} className="Ring_inputNumber-Round" />
                </div>
            })}
        </div> }
        <img src={imgSrc} className="Ring_img-AttrFormat"/>
        { !alingLeft && <div className="Ring_div-AttrFormat">
            { attrsValues.map((attr, indx) => {
                return <div key={"attr_"+attr.label+"_indx"} style={{width: "100%"}} className={(indx == 1 ? "Ring-mapDiv-1st" : "")} > 
                    <span className="number-wrapper"><input type="number" defaultValue={attr.value} className="Ring_inputNumber-Round" /></span>
                    <label className="Ring_label-AttrFormat Ring_label-textLeft">{attr.label}</label>
                </div>
            })}
        </div> }
    </div>
}


export default Ring