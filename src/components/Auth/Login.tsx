import React from "react";
import { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Jumbotron, Container } from 'reactstrap'
import { SignupState } from "./Signup";
import logo from '../../assets/dad.jpg'
import { Redirect } from "react-router-dom";
import { User } from '../../types'
import APIURL from '../../utils/Environment'

type LoginProps = {
    updateToken: (newToken: string) => void
    setUser(u: User): void
}


class Login extends Component<LoginProps, SignupState> {
    constructor(props: LoginProps) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '', 
            email: '', 
            password: '',
            confirmPassword: '',
            emailValid: true,
            message: '',
            loggedIn: false
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({ [name]: value } as unknown as Pick<
            SignupState,
            keyof SignupState
        >)
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let userData = {
            email: this.state.email,
            password: this.state.password, 
        }
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: new Headers({
            'Content-Type': 'application/json',
            }),
        })
            .then(res => res.json())
            .then(data => {
            this.props.updateToken(data.sessionToken)
            this.props.setUser(data.user)
            console.log(data.user)
            if (data.user !== undefined){
                this.setState({ loggedIn: true})                
                {window.confirm('Success! You are logged in.')}
                <Redirect push to='/'/>
            } else if (data.user === undefined){
                {window.confirm('Oops! Check your login credentials and try again.')}
            }
        })
        .catch(err => console.info(err))
    }

    render() {
        return (
            <>
            <Jumbotron className='signup-login' fluid>
                <Container fluid>
                    <h1 className='display-3'>Log In</h1>
                </Container>
            </Jumbotron>
            <div className='signup-login-form'>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <Input
                    onChange={this.handleChange}
                    name='email'
                    value={this.state.email}
                    required
                    type='text'
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input
                    type='password'
                    onChange={this.handleChange}
                    name='password'
                    value={this.state.password}
                />
                </FormGroup>
                <Button type='submit'>Log In</Button>
            </Form>
            </div>
            </>
        )
        }
}


export default Login