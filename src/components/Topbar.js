import React from "react";
import ajay from "/home/htadmin/Documents/codingPractice/React/ajayapp/src/components/ajay.jpg"

function Topbar(){
    return (
    <div>
      <div className="topbarphoto">  <img src={ajay} width="30" height="30" /></div>
        <div className="topbar">Ajay</div>

    </div>
    )
}

export default Topbar