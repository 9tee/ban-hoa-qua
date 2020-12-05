import React from 'react';
import PanelMenu from './PanelMenu';
import PanelMain from './PanelMain';
import PanelMenuItem from './PanelMenuItem'

class Panel extends React.Component{

    render(){
        return(
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <PanelMenu></PanelMenu>
                        <PanelMain></PanelMain>
                    </div>
                </div>
            </section>
        );
    }
}

export default Panel;