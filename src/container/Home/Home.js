import React from 'react';
import Categories from '../../components/HomeBodyComponent/Categories'
import Feature from '../../components/HomeBodyComponent/Feature';
import Panel from '../../components/PanelComponents/Panel';


class Home extends React.Component{
    render(){
        return(
            <>
                <Panel></Panel>
                <Categories></Categories>
                <Feature></Feature>
            </>
        );
    }
}

export default Home;