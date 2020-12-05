import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'
import {BASE_URL} from '../../consts';


class PanelMenu extends React.Component {
    constructor(props){
        super(props);
        if (this.props.visible === false){
            this.state = {style : {opacity: 0, height:'0px',padding:'0px', overflow: 'hidden'}};
        }
        else{
        this.state = {style : {opacity:1, display:'block'}};
        }
        this.state.data = [];
    }

    componentDidMount(){
    
        axios.get(BASE_URL + '/types').then((respone) => this.setData(respone)).catch(console.log)
    }
    
    setData(respone){
        switch(respone.status){
            case 200:{
                this.setState({data:respone.data},console.log());
                break;
            }
            default:{
                break;
            }
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
                        <span> Tất cả các mục</span>
                    </div>
                    <ul style={{...{transition: 'opacity ease-in-out 1s 0s'},...this.state.style}}>
                        {
                        this.state.data.map((item)=>{
                            return(<li><a href={`/shop/${item.maloai}`} >{item.tenloai}</a></li>)
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default PanelMenu;