import React from "react";
import { Component } from "react";
import { Form, Input, Button, Label, FormGroup, Jumbotron, Container } from 'reactstrap'
import logo from '../../assets/dad.jpg'
import { Redirect } from 'react-router-dom'
import { User } from '../../types'
import APIURL from '../../utils/Environment'


type SignupProps = {
    updateToken: (newToken: string) => void
    setUser(u: User): void

}

export type SignupState = {
    firstName: string,
    lastName: string, 
    email: string, 
    password: string,
    confirmPassword: string,
    emailValid: boolean, 
    message: string,
    loggedIn: boolean
}

class Signup extends Component <SignupProps, SignupState>{
    constructor(props: SignupProps) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '', 
            email: '', 
            password: '',
            confirmPassword: '',
            emailValid: false,
            message: '',
            loggedIn: false
        }

        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value } as unknown as Pick<
            SignupState,
            keyof SignupState
            >)            
        }
    
    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        }

        fetch(`${APIURL}/user/signup`, {
                    method: 'POST',
                    body: JSON.stringify(newUserData),
                    headers: new Headers ({
                        'Content-Type': 'application/json'
                    }),
                })
                .then(res => res.json())
                .then(data => {
                    this.props.updateToken(data.sessionToken)
                    this.props.setUser(data.user)
                    this.setState({ loggedIn: true})
                    console.info(data.user)
                })
                .catch(err => {
                    console.error(err)
                    console.info(err)
                })
    }

    render(){
        return(
            <>
                <Jumbotron className='signup-login' fluid>
                    <Container fluid>
                        <h1 className='display-3'>Sign Up</h1>
                    </Container>
                </Jumbotron>
                    <div className='signup-login-form'>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input type='email' required pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$' name='email' title='Please enter a valid email address.' onChange={this.handleChange} value={this.state.email}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type='password' required pattern='^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z]).*$'  title='Password must be at least 8 characters, contain one upper case letter, one lower case letter, and a number.'  name='password' minLength={8} onChange={this.handleChange} value={this.state.password}/>
                        </FormGroup>              
                        <FormGroup>
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input type='password' name='confirmPassword' onChange={this.handleChange} value={this.state.confirmPassword}/>
                        </FormGroup>              
                        <FormGroup>
                            <Button type='submit'>Register</Button>
                        </FormGroup>
                    </Form>
                    </div>
                    {this.state.loggedIn ?
                    <>
                    {window.confirm('Success! You are logged in. If you are a Breastfeeding Counselor, please add your date of accreditation on the next screen.')}
                    <Redirect push to='/counselor'/>
                    
                    </>
                    : <></>}
            </>
        )
    }
}
export default Signup