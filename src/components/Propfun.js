import React from "react";

const Propfun = (props) =>{

    return(
        <div>
            <h1>welcome {props.name } </h1>
            <h3> {props.children }</h3>
        </div>
    )
}

export default Propfun 