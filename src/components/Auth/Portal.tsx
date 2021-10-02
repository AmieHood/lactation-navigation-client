import React from "react";
import { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { User } from '../../types'

type Props = {
    updateToken(newToken: string): void;
    setUser(u: User): void
    };

    type PortalState = {
    showLogin: boolean;
    };

    class Portal extends Component<Props, PortalState> {
    constructor(props: Props) {
        super(props);
        this.state = {
        showLogin: true,
        };
    }

    //Login/Signup toggle
    toggle = () => {
        this.setState({ showLogin: !this.state.showLogin });
    };

    render() {
        return (
        <>
            {this.state.showLogin ? (
            <>
            <Login updateToken={this.props.updateToken} setUser={this.props.setUser} />
            <div className='signup-login-form'>
                <Link to="/portal"><Button onClick={this.toggle}>Sign Up Here</Button></Link>
            </div>
            </>
            ) : (
            <>
            <Signup updateToken={this.props.updateToken} setUser={this.props.setUser}/>
            <div className='signup-login-form'>
                <p>Already have an account?</p> 
                <Link to="/portal"><Button onClick={this.toggle}>Log In here.</Button></Link>
            </div>
            </>
            )}
        </>
        );
    }
}

export default Portal;
