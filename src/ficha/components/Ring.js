import React, {Fragment} from 'react'
import Attribute from './Attribute'
import Points from './Points'
import './Ring.css' 

const Ring = ({attributes, points, imgSrc, displayName, align, color, row })  => {
    const justifyOverRow = ["end", "center", "center"]
    const flowOverRow = ["column", "column", "row"]
    const styleFlexDisplay = {
        margin: "0 "+(10+30*(row-1))+"px", 
        marginTop: (row==3 ? "-50px" : "0"), 
        flexDirection: (points ? "column" : "row")
    }
    return <div className="Ring_div-flexDisplay" style={styleFlexDisplay}>
        {align.left && 
            <Attribute attrs={attributes} color={color} flexDirection="row-reverse" direction="Right" />   
        }
        {!align.left && 
            <div className="Ring_divRingValue-flex" style={{justifyContent: justifyOverRow[row-1], flexFlow: flowOverRow[row-1]}}>
                <input style={{margin: 0, borderColor: color}} disabled={true} value={2} className="Attribute_inputNumber-Round" type="number" />
            </div>
        }
        <div className="Ring_divImg-flex" style={{flexDirection: (row > 1 ? "column-reverse" : "column")}}>
            <p className="Ring_p-center">{displayName}</p>
            <img src={imgSrc} className="Ring_img-round" />
        </div>
        {align.left && 
            <div className="Ring_divRingValue-flex"  style={{justifyContent: justifyOverRow[row-1], flexFlow: flowOverRow[row-1], borderColor: color}}>
                <input style={{margin: 0, borderColor: color}} disabled={true} value={2} className="Attribute_inputNumber-Round" type="number" />
            </div>
        }
        {!align.left 
            && ( attributes &&
                <Attribute attrs={attributes} color={color} flexDirection="row" direction="Left" />  ) 
             || ( points && 
                <Points {...points} color={color} /> )
        } 
    </div>
    
    
    
    
    // <div style={{height: "100%", width: "100%", display: "flex", flexDirection: (points ? "column" : "row"), justifyContent:"center"}}>
    //     { align.left && 
    //         <div className="Ring_divAttr-format">
    //             <Attribute attrs={attributes} flexDirection="row-reverse" direction="Right" />
    //         </div> 
    //     }
    //     <div className="Ring_divImg-position" style={{width: points ? "100%": "60%"}}>
    //         <div style={{position: "relative", top: top, left: left}}>
    //             <input style={{margin: 0}} defaultValue={2} className="Attribute_inputNumber-Round" type="number" />
    //         </div>
    //         <img src={imgSrc} className={"Ring_img-round " + (align.legt ? "Ring_img-left" : "Ring_img-right")}/>
    //     </div> 
    //     { !align.left && 
    //         ( attributes &&
    //             <div className="Ring_divAttr-format Ring_divAttr-right">
    //                 <Attribute attrs={attributes} flexDirection="row" direction="Left" />
    //             </div> 
    //         ) || 
    //         ( points && 
    //             <Points {...points} />
    //         )
    //     }
    // </div>
}


export default Ring