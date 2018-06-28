import React from "react";

class HogBox extends React.Component{
    
    hogNameTranslation = (name) => {
      let snakeName = name.toLowerCase().split(" ").join("_")
      return `${snakeName}`
        
    }
    // hogNameTranslation2 = (name) => {
    //     let snakeName = name.toLowerCase().split(" ").join("_")
    //     return `../hog-imgs/${snakeName}.jpg`
    //   }
  

    render() {
        // let url2 = this.hogNameTranslation2(this.props.hog.name)

        let url = this.hogNameTranslation(this.props.hog.name)
        // console.log(url)
        
        // let url3 = '../hog-imgs/mudblood.jpg'
        // console.log(url2)
        // console.log(`../hog-imgs/${url}.jpg`)

        // console.log(`../hog-imgs/${url}.jpg` === url2)

        return(
            <div onClick = {() => this.props.onClickHog(this.props.hog.name)} className = "card">
                <img src={require(`../hog-imgs/${url}.jpg`)} alt={this.props.hog.name}/>
             <h1> {this.props.hog.name} </h1>
            </div>
        )
    }
    

}

export default HogBox;