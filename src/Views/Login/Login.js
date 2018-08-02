import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div  style={{display:`${this.props.loginDisplay}`}} className="Login-main-container">
                <form onSubmit={this.props.handleSubmit} className="login-form">
                    <h1>Login</h1>
                    <div className="input-container">
                        <input type="text" name="email" placeholder="Email" onChange={this.props.handleChange} value={this.props.email}/>
                    </div>
                    <div className="input-container">
                        <input type="text" name="password" placeholder="Password" onChange={this.props.handleChange} value={this.props.password}/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        )
    }

}

export default Login