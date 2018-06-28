import React from "react";
import HogBox from './HogBox';


class HogList extends React.Component{
    render(){
        let HogsToDisplay = this.props.hogs.map(h => {
            return <HogBox hog={h}/>
        })

        return(
            <div>
                {HogsToDisplay}
            </div>
        )
    }

}

export default HogList;