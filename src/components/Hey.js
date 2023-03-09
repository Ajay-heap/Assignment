import React, { useState ,useEffect} from "react";
const userList = [
    {
        id: 1,
        firstName: "Ajay"
        
    },
    {
        id: 2,
        firstName: "akshay"
       
    },
    {
        id: 3,
        firstName: "tejas"
        
    }
]
function Hey() {
    const [users,setusers]= useState([]);
    useEffect(() => {
        setusers(userList)
      });

    return (
        <div>
           <center > 
            <table>              
                    {                     
                        users.map((u) => {
                           return <div>
                                <tr>
                                    <td>id :{u.id}</td>
                                    <td>{u.firstName}</td>                                                    
                                </tr>
                            </div>
                        })}
            </table>
        </center>
        </div>
    );
}

export default Hey