import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <Link to="/"><img src="/assets/logo.png" alt=""></img></Link>
                                </div>
                                <ul>
                                    <li>Địa chỉ: 138 Trần Bình</li>
                                    <li>SĐT: +65 11.188.888</li>
                                    <li>Email: hello@colorlib.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Một số thông tin</h6>
                                <ul>
                                    <li><a href="#">Về chúng tôi</a></li>
                                    <li><a href="#">Về shop chúng tôi</a></li>
                                    <li><a href="#">Mua bán an toàn</a></li>
                                    <li><a href="#">Thông tin giao hàng</a></li>
                                    <li><a href="#">Điều khoản sử dụng</a></li>
                                    <li><a href="#">Tìm kiếm shop</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Chúng tôi là ai</a></li>
                                    <li><a href="#">Dịch vụ của chúng tôi</a></li>
                                    <li><a href="#">Dự án</a></li>
                                    <li><a href="#">Liên lạc</a></li>
                                    <li><a href="#">Có gì mới</a></li>
                                    <li><a href="#">Giấy phép kinh doanh</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Tham gia với chúng tôi ngay</h6>
                                <p>Đăng kí nhận thông tin về chúng tôi và shop qua email</p>
                                <form action="#">
                                    <input type="text" placeholder="Điền email bạn vào đây"></input>
                                    <button type="submit" className="site-btn">Đăng kí</button>
                                </form>
                                <div className="footer__widget__social">
                                    <a href="#"> <FontAwesomeIcon icon={faFacebook} color="black"/></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} color="black" /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} color="black" /></a>
                                    <a href="#"><FontAwesomeIcon icon={faPinterest} color="black" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;