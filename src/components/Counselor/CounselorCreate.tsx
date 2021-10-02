import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';
import logo from '../../assets/beach.jpg'
import { Counselor } from '../../types'
import { Redirect } from 'react-router-dom'
import APIURL from '../../utils/Environment'


let dateInput = {
    width: '50%'
}

type CounselorProps = {
    fetchCounselors: () => void
    token: string
}

class CounselorCreate extends Component <CounselorProps, Counselor> {
    constructor(props: CounselorProps) {
        super(props)
        this.state = {
            token: this.props.token,
            dateAccredited: '',
            role: ''
        }
    }


    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value } as unknown as Pick<
            Counselor,
            keyof Counselor
            >)
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void  => {
        console.info('submit function')
        event.preventDefault()
        let newCounselorData = {
            dateAccredited: this.state.dateAccredited,
            role: this.state.role
        }
        console.info(newCounselorData)

        fetch(`${APIURL}/counselor/create`, {
                    method: 'POST',
                    body: JSON.stringify(newCounselorData),
                    headers: new Headers ({
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.props.token}`
                    }),
                })
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        dateAccredited: '',
                        role: 'Counselor'
                    })
                    // this.props.fetchCounselors()
                    console.info(data.user)
                    console.info(data.role)
                    console.info(data.dateAccredited)

                    
                })
                .catch(err => {
                    console.error(err)
                })

    }
    
    render(){
        return(
                <>
                    {/* <Card className='card'>
                        <CardImg className='all-cards' top width="100%" src={logo} alt="Card image cap" />
                        <CardBody className='all-cards'>
                            <CardTitle className='card-img-overlay' tag="h1">Become a Breastfeeding USA Counselor</CardTitle>
                        </CardBody>
                    </Card> */}
                    <Jumbotron className='signup-login' fluid>
                        <Container fluid>
                            <h1 className='display-3'>Become a Breastfeeding USA Counselor</h1>
                        </Container>
                    </Jumbotron>
                    <div className='signup-login-form'>
                    <h3 style={{textAlign: 'center', color: '#3b054f'}}>Already a Breastfeeding USA Counselor? Add your accreditation date here:</h3>
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup className='form-styling'>
                        <Label htmlFor="dateAccredited">Date Accredited</Label>
                        <Input style={dateInput} type='date' name='dateAccredited' onChange={this.handleChange} value={this.state.dateAccredited}/>
                        <Button className='form-styling'>Add Date</Button>
                    </FormGroup>
                    </Form>
                    <hr />
                    <h3 style={{textAlign: 'center', color: '#3b054f'}}>Interested in Becoming a Breastfeeding USA Counselor? <a href='https://breastfeedingusa.org/content/becoming-breastfeeding-counselor'>Learn more!</a></h3>
                    </div>
                    {this.state.role == 'Counselor' ? (
            <>
                {window.confirm('Congratulations! You are a Breastfeeding Counselor!')}
                <Redirect push to="/portal" />
            </>
            ) : (
            <></>
            )}
                </> 
            )
        }
    }
    
    export default CounselorCreate