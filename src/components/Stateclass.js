import React from "react";

class Stateclass extends React.Component{

    constructor() {
        super()
        this.state = {
            message : 'welcome to visit my site'
        }
    }
    changesMessage(){
        this.setState ({
            message : 'thank you visit again'
        })
    }
    changesNewMessage(){
        this.setState (
            {
               message : 'welcome once agains' 
            }
        )
    }


    render(){
        return(
            <div>
                <h1>hi ajay</h1>
                <h1>hello {this.state.message} </h1>
                <button onClick={() => this.changesMessage()}>click me</button>
                <button onClick={() => this.changesNewMessage()}>click me New message</button>
            </div>
        )
    }
}


export default Stateclass