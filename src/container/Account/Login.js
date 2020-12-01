import React from 'react'
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
    }
    login() {
        var data = '{\n    "username":"meoyeu123",\n    "password":"meoyeu123"\n}';

        var config = {
            method: 'POST',
            url: 'http://127.0.0.1:5000/sign-in',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                

            },
            data: data
        };

        axios(config)
            .then(response => {
                window.dispatch({type: 'LOGGED', data: false});
                localStorage.setItem('token',response.data.data.token);
                console.log(this.props);
                this.props.history.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    onUsernameChange(e) {
        this.setState({ username: e.target.value })
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div className="bg">
                <div className="container">
                    <div className="col-md-3 col-md-offset-4">
                        <span className="text">Login</span>
                        <div className="login-form">
                            <div className="form-group">
                                <input className="form-control" placeholder="Account" type="text" onChange={(e) => { this.onUsernameChange(e) }}></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Password" type="password" onChange={(e) => { this.onPasswordChange(e) }}></input>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" /> Giữ tôi luôn đăng nhập </label>
                            </div>
                            <br /> <a className="btn btn-info" onClick={() => { this.login() }}>Đăng nhập</a>
                            <br />
                            <br /> <a href="#"><small>Quên mật khẩu</small></a>
                            <br /> <a href="#"><small>Đăng nhập bằng mã dùng một lần</small></a>
                            <br />
                            <br />
                            <br />
                            <div>
                                <small>Không có tài khoản?</small> <a href="#"><small>Tạo tài khoản</small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;