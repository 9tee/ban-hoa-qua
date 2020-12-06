import React from 'react';

class HeaderLogo extends React.Component{
    render(){
        return(
            <div className="col-lg-3">
                <div className="header__logo">
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/assets/logo.png'}></img>
                    </a>
                </div>
            </div>
        );
    }
}

export default HeaderLogo;