import React from "react";

class HogBox extends React.Component{
    render() {
        return(
            <h1> {this.props.hog.name} </h1>
        )
    }
    

}

export default HogBox;