import React from "react";
import LatestProduct from "./LatestProduct";

class AllSlide extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <LatestProduct></LatestProduct>
                    </div>
                    <div className="col-4">
                        <LatestProduct></LatestProduct>
                    </div>
                    <div className="col-4">
                        <LatestProduct></LatestProduct>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllSlide;