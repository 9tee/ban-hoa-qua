import React from 'react';
import PanelPoster from './PanelPoster';
import PanelSearchBar from './PanelSearchBar';



class PanelMain extends React.Component{
    render(){
        return(
            <div className="col-lg-9">
                <PanelSearchBar></PanelSearchBar>
                <PanelPoster></PanelPoster>
            </div>
        );
    }
}

export default PanelMain;