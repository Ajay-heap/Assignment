import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import './Home.css';
import Multikart from "/home/htadmin/Documents/codingPractice/React/ajayapp/src/components/Multikart.png"

function Home () {
    return (
    <div >
       <div >
        <div>
            <img src={Multikart} width="150" height="70" />
            <div  style={{margin : "20px"}}>Main Menu</div>
            <button style= {{margin : "20px"}}>Dashbord</button><br/>
            <button style={{margin : "20px" }}>Users</button> 
        </div>
        
       
        </div>        
        </div> 
  
    )
}

export default Home