import React from "react";

function Add (){
    return (<> 
        <div  className="adduser "> 
        <button style={{background : "green" }}>+ Add User</button>
        </div>
        <div className="users">Users</div>
        <div className="users1"  ><button>Sort By</button> <button>Filter By</button></div>
       
       

        </>

    )
}

export default Add