import React from 'react';
import HogList from './HogList';
import HogDisplay from './HogDisplay';

class AppContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hogs: props.allHogs,
            currentHog: this.props.allHogs[0], //name
            inputText: "",
            weightSearch: false,
            selectMenu: 0,
        }
    }

    displayDetails = (name) => {
       let hogClicked =  this.props.allHogs.find(hog => hog.name == name)
        this.setState( {currentHog: hogClicked})
    }

    weightButton = (e) => {
        if(this.state.weightSearch === false) {
        this.setState( {weightSearch: true})}
        else {
            this.setState( {weightSearch: false})
        }
    }

    selectGrease= (event) => {
        let index = event.target.selectedIndex;
        this.setState({selectMenu: index}, this.filterHogs)
        // let filteredHogs = this.state.hogs;
        // if(index === 1) {
        //     filteredHogs = this.state.hogs.filter( (hog) => {
        //         return hog.greased === true;
        //     })
        // }else if(index === 2) {
        //     filteredHogs = this.state.hogs.filter( (hog) => {
        //         return hog.greased === false;
        //     })
        // }
        // this.setState({hogs: filteredHogs})

        // debugger;
    }


    generateNewTextBox = () => {
        return (
           <div className = "ui header">
            <input type="text" value={this.state.inputText} onChange={this.handleChange}/> 
            <select onChange={this.selectGrease}>
                <option value="All">All Hogs</option>
                <option value="true">Greased</option>
                <option value="false">Not Greased</option>
            </select>
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
        let greaseFilter = this.props.allHogs;

        if(this.state.selectMenu === 1){
            greaseFilter = this.props.allHogs.filter(h => h.greased)
        }else if( this.state.selectMenu === 2){
            greaseFilter = this.props.allHogs.filter(h => !h.greased)

        }

        if(this.state.weightSearch) {
            filteredHogs = greaseFilter.filter( (hog) => {
                return hog[this.ratio] == (this.state.inputText)
            })
        }
        else 
        {filteredHogs = greaseFilter.filter( (hog) => {
            return hog.name.includes(this.state.inputText)
        }) }
        this.setState({hogs: filteredHogs})
    }
    render(){
        return(

            <div>
                {this.generateNewTextBox()}
                <HogDisplay singleHog = {this.state.currentHog}/>
                <HogList hogs = {this.state.hogs} onClickHog = {this.displayDetails}/>
                
            </div>
        );
    }
}

export default AppContainer;