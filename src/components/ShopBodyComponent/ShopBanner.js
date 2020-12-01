import React from 'react'

class ShopBanner extends React.Component {
    render() {
        return (
            <section className="breadcrumb-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/breadcrumb.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{this.props.bannertext}</h2>
                                <div className="breadcrumb__option">
                                    {this.props.links}
                                    <span>{this.props.text}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShopBanner;