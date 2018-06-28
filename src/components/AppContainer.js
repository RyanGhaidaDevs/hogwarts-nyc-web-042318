import React from 'react';
import HogList from './HogList';
import HogDisplay from './HogDisplay';

class AppContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hogs: props.allHogs,
            currentHog: 0, //index of the hogs
            inputText: "",
            weightSearch: false,
        }
    }

    weightButton = (e) => {
        if(this.state.weightSearch === false) {
        this.setState( {weightSearch: true})}
        else {
            this.setState( {weightSearch: false})
        }
    }
    generateNewTextBox = () => {
        return (
           <div>
            <input type="text" value={this.state.inputText} onChange={this.handleChange}/> 
            <br/><input type="checkbox" onChange={this.weightButton}></input>
            <label> Search By Weight</label>
           </div>
        )
    }

    handleChange = (e) => {
        this.setState({inputText: e.target.value}, this.filterHogs)
    }

    ratio = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    filterHogs = () => {
        let filteredHogs 
        if(this.state.weightSearch) {
            filteredHogs = this.props.allHogs.filter( (hog) => {
                return hog[this.ratio] ==(this.state.inputText)
            })
        }
        else 
        {filteredHogs = this.props.allHogs.filter( (hog) => {
            return hog.name.includes(this.state.inputText)
        }) }
        this.setState({hogs: filteredHogs})
    }
    render(){
        return(

            <div>
                {this.generateNewTextBox()}
                <HogList hogs = {this.state.hogs}/>
                <HogDisplay singleHog = {this.state.hogs[this.state.currentHog]}/>
            </div>
        );
    }
}

export default AppContainer;