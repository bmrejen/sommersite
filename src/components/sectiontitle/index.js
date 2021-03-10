import React from 'react'

import './style.css'

const SectionTite = ( props ) => {
    return(
        <div className="sec-title">
            <h2>{props.sectitle}</h2>
            <div className="clearfix"></div>
        </div>
    )
}
export default  SectionTite;