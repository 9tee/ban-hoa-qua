import React from 'react';

class ShopItemFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {className:'nice-select',
        numbers:[{value:"Default",class:"option selected focus"},{value:"Value1",class:"option"},{value:"Value2",class:"option"}],
        sort:"Default"
    }
    }
    
    openSelector(){
        if(this.state.className === 'nice-select'){
        this.setState({className:'nice-select open'})
        }
        else
        {
            this.setState({className:'nice-select'}) 
        }
    }

    click(index){
        var numbers = [{value:"Default",class:"option"},{value:"Value1",class:"option"},{value:"Value2",class:"option"}]
        numbers[index]["class"] = "option selected focus"
        this.setState({numbers:numbers, sort:numbers[index]["value"]})
    }
    render() {
        return (
            <div className="filter__item">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="filter__sort">
                            <span>Sắp xếp</span>
                            <div className={this.state.className} onClick={()=>{this.openSelector()}} tabIndex="0"><span className="current">{this.state.sort}</span>
                                <ul className="list">
                                    {this.state.numbers.map((number,index) => 
                    <li key={index}  data-value={index} onClick={()=>{this.click(index)}} className={number.class}>{number.value}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="filter__found">
                            <h6><span>{this.props.total}</span> Products found</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopItemFilter;