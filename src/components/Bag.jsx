import React from 'react'

function Bag(props) {
    const {picture,name,info} = props ;    

    return (
        <div className="bag">
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>{info}</h4>
        </div>
    )
}

export default Bag