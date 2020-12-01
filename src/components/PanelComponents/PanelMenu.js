import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
class PanelMenu extends React.Component {
    constructor(props){
        super(props);
        if (this.props.visible === false){
            this.state = {style : {opacity: 0, height:'0px',padding:'0px', overflow: 'hidden'}};
        }
        else{
        this.state = {style : {opacity:1, display:'block'}};
        }
    }
    toggleMenu(){
        if(this.state.style.opacity !== 0){
            this.setState({style : {opacity: 0, height:'0px',padding:'0px', overflow: 'hidden'}});
        }
        else{
            this.setState({style : {opacity:1, display:'block'}});
        }
       
    }
    render() {
        return (
            <div className="col-lg-3">
                <div className="hero__categories">
                    <div className="hero__categories__all" onClick={() => {this.toggleMenu()}}>
                        <FontAwesomeIcon icon={faBars} color="white" />
                        <span> All departments</span>
                    </div>
                    <ul style={{...{transition: 'opacity ease-in-out 1s 0s'},...this.state.style}}>
                        {this.props.items}
                    </ul>
                </div>
            </div>
        );
    }
}

export default PanelMenu;