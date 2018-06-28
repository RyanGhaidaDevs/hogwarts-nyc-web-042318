import React from "react";

class HogDisplay extends React.Component{
    hogNameTranslation = (name) => {
        let snakeName = name.toLowerCase().split(" ").join("_")
        return `${snakeName}`
      }
    render(){
    
      let hogProp = this.props.singleHog
      let url = this.hogNameTranslation(hogProp.name)
      if(hogProp) {
        let ratio = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        return (
            <div className = "ui fluid image">
                <img src={require(`../hog-imgs/${url}.jpg`)} alt={hogProp.name}/>
                <h1> Name: {hogProp.name}</h1>
                <h2>Greased: {hogProp.greased.toString()}</h2>
                <h2>Best Medal: {hogProp["highest medal achieved"]}</h2>
                <h2>Speciality: {hogProp.specialty}</h2>
                <h3>{ratio} : {hogProp[ratio]}</h3>
            </div>
        )
    }
    else {
        return(
        <div>
            <h1>
                You ate too much bacon
            </h1>
        </div>
        )}
}}

export default HogDisplay;