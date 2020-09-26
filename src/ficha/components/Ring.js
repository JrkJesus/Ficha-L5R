import React, {Fragment} from 'react'
import Attribute from './Attribute'
import Points from './Points'
import './Ring.css' 

const Ring = ({attributes, points, imgSrc, alingLeft })  => {

    return <div style={{height: "100%", width: "100%", display: "inline-block"}}>
        { alingLeft && 
            <div className="Ring_divAttr-format">
                <Attribute attrs={attributes} flexDirection="row-reverse" direction="Right" />
            </div> 
        }
        <div className="Ring_divImg-position">
            <img src={imgSrc} className={"Ring_img-round " + (alingLeft ? "Ring_img-left" : "Ring_img-right")}/>
        </div> 
        { !alingLeft && 
            ( attributes &&
                <div className="Ring_divAttr-format Ring_divAttr-right">
                    <Attribute attrs={attributes} flexDirection="row" direction="Left" />
                </div> 
            ) || 
            ( points && 
                <Points {...points} />
            )
        }
    </div>
}


export default Ring