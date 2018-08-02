import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{display:`${this.props.homeDisplay}`}} className="home-main-container">
                <p>Email {this.props.email}</p>
                <p>password {this.props.password}</p>
            </div>
        )
    }
}

export default Home;