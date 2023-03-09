import React from "react";

class Prop extends React.Component{
    render(){
        return (
            <div>
                <h1> wel  {this.props.name}</h1>
                <h3>{this.props.children} </h3>

            </div>
        )

    }


}

export default Prop