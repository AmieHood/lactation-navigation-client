import React from "react";
import { Component } from "react";
import styled from 'styled-components'
import BGImage from '../assets/home-image.jpeg'
import BGImageDesktop from '../assets/home-image-desktop.jpeg'
import { Container1 } from "../App.styles";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import donate from '../assets/heartmilk.jpg'
import colorlogo from '../assets/colorlogo.png'
import articles from '../assets/articles.jpg'
import becomecounselor from '../assets/becomecounselor.jpg'
import statement from '../assets/statement.jpg'
import sleepresources from '../assets/sleepresources.jpg'
import supplementation from '../assets/supplementation.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import homesupport from '../assets/homesupport.jpg'
import homesupportSmall from '../assets/homesupportSmall.jpg'

const Background = styled.div`
    // background-image: url(${BGImageDesktop});
    background-image: url(${homesupport});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    margin: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        background-image: url(${homesupportSmall});
    }

    // @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1){
    //     background-image: url(${homesupport});
    // }
`

const Text = styled.div`
    margin: auto;
    margin-top: 30em;
    width: 50vw;
    padding: 1em;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`
const Icon = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    font-size: 5em;
    
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1){
        margin-top: 5em
    }

    @media only screen and (min-width: 1200px){
        margin-top: 6em
    }
`

class Home extends Component {

    handleClick = (event: React.FormEvent<HTMLFormElement>) => {

    }
    render(){
        return(
            <>
            <Container1>
                <Background>
                    <Text>
                        <h1>Support Begins Here</h1>
                        <Link to='/findchapter'><Button type='button'>Find a Local Chapter</Button></Link>
                    </Text>
                        <Icon>
                        <FontAwesomeIcon icon={faChevronDown} />
                        </Icon>
                </Background>
            </Container1>
            
            <div className='row'>
                <div className='column'>
                    <a href='https://breastfeedingusa.org/civicrm/contribute/transact?reset=1&id=2' target='_blank' ><div className='container2'>
                        <img className='darken' src={donate} alt='baby surrounded by milk' />
                        <div className="centered"><h1>Donate</h1></div>
                    </div></a>
                   
                    <a href='https://breastfeedingusa.org/content/article/breastfeeding-information-articles' target='_blank'><div className='container2'>
                        <img className='darken' src={articles} alt='Woman nursing toddler' />
                        <div className="centered"><h1>Articles</h1></div>
                    </div></a>
                </div>
                <div className='column'>
                    <a href='https://breastfeedingusa.org/aboutus' target='_blank'><div className='container2'>
                        <img className='darken' src={colorlogo} alt='Breastfeeding USA logo'/>
                        <div className="centered"><h1>About Us</h1></div>
                    </div></a>
                    <a href='https://breastfeedingusa.org/content/article/sleeping-baby-what-does-really-mean' target='_blank'><div className='container2'>
                        <img className='darken' src={sleepresources} alt='sleeping mom and baby'/>
                        <div className="centered"><h1>Biologically Normal Sleep Habits</h1></div>
                    </div></a>
                    
                </div>
                <div className='column'>
                    <a href='https://breastfeedingusa.org/content/becoming-breastfeeding-counselor' target='_blank'><div className='container2'>
                        <img className='darken' src={becomecounselor} alt='Woman helping another woman breastfeed twins'/>
                        <div className="centered"><h1>Become a Breastfeeding Counselor</h1></div>
                    </div></a>
                    <a href='https://breastfeedingusa.org/content/article/statement-breastfeeding' target='_blank'><div className='container2'>
                        <img className='darken' src={statement} alt='Person breastfeeding in field of flowers'/>
                        <div className="centered"><h1>Statement on Breastfeeding</h1></div>
                    </div></a>
                    <a href='https://breastfeedingusa.org/content/article/milk-sharing-formal-and-informal' target='_blank'><div className='container2'>
                        <img className='darken' src={supplementation} alt='parent holding supplemental nursing system for nursing parent'/>
                        <div className="centered"><h1>Supplementation</h1></div>
                    </div></a>
                </div>
            </div>
            </>
    
        ) 

    }
} 

export default Home