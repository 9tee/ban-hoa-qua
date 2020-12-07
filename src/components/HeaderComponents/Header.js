import React from 'react'
import NaviBar from './NaviBar';
import HeaderLogo from './HeaderLogo';
import HeaderCart from "./HeaderCart";
import { connect } from 'react-redux';


class Header extends React.Component {
    componentDidMount(){
        let token = window.localStorage.getItem('token');
        if(!!token){
            window.dispatch({type:'LOGGED', data:true});
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <HeaderLogo></HeaderLogo>
                    <NaviBar></NaviBar>
                    <HeaderCart login={this.props.login}></HeaderCart>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      login: state.login.login,
    }
  }
  export default connect(mapStateToProps)(Header)
