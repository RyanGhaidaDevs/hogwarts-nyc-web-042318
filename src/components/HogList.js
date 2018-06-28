import React from "react";
import HogBox from './HogBox';


class HogList extends React.Component{
    render(){
        let HogsToDisplay = this.props.hogs.map(h => {
            return <HogBox hog={h} onClickHog = {this.props.onClickHog}/>
        })

        return(
            <div className="ui cards">
                {HogsToDisplay}
            </div>
        )
    }

}

export default HogList;