import styled, { createGlobalStyle } from 'styled-components'
import findChapter from './assets/findchapter.jpg'
import login from './assets/dad.jpg'
import info from './assets/info.jpg'
import createChapter from './assets/createChapter.jpg'
import createChapterDesktop from './assets/createChapterDesktop.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        color: white;
        background-color: #cdcdcd;
    }

    h2 {
        font-family: 'Lora', serif;
        font-size: 2rem;
        color: #ec5a29;
    }

    .card {
        background-color: transparent !important;
        text-align: center;
        border: none
    }

    .card-img-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em;
    }

    .sitebar {
        background-color: transparent !important;
        position: fixed
    }

    .modal-header {
        background-color: #999999 !important;
    }

    .modal-body {
        background-color: #999999 !important;
    }

    button {
        margin: 1em;
        background-color: transparent !important;
        border: 1px solid white !important;
        border-radius: 20px !important;

    }

    button:hover {
        background-color: #999999 !important
    }

    a {
        color: white !important;
        text-decoration: none !important;
        transition: .5s
    }

    a::before {
        background: #ed3b7b;
        transition: .5s;
        transform: scale(.9);
        z-index: -1
    }

    a:hover::before {
        transform: scale(1.1);
        box-shadow: 0 0 15px #ed3b7b
    }

    a: hover {
        color: #ed3b7b;
        box-shadow: 0 0 5px #ed3b7b;
        text-shadow: 0 0 5px #ed3b7b
    }

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    .message {
        position: fixed !important;
        top: 0px !important;
        left: 0px !important
        width: 100%;
        z-index: 9999 !important;
        border-radius: 0px !important;
        margin-top: 3em
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }

    // Home page image grid layout
    .column {
    flex: 33%;
    max-width: 33%;
    padding: 0 4px;
    }
    
    .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
    }
    
    /* Responsive layout - makes a two column-layout instead of 3 columns */
    @media screen and (max-width: 800px) {
    .column {
        flex: 50%;
        max-width: 50%;
    }
    }
    
    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
    .column {
        flex: 100%;
        max-width: 100%;
    }
    }

    //darken images too bright for white text
    .darken {
        filter: brightness(75%)
    }

    .container2 {
        position: relative;
        text-align: center;
        border-radius: 10px;
        background-color: #cdcdcd;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        cursor: pointer;
    }

    .container2:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .table-responsive {
        style: overflow-x:auto;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
    }
    
    th, td {
    text-align: left;
    padding: 8px;
    }
    
    tr:nth-child(even){background-color: #f2f2f2}

    .cardsContainer {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        padding-left: 15%;
        padding-right: 15%;

        @media only screen and (max-width: 600px){
            max-width: 100vw;
            padding-left: 0px;
            padding-right: 0px;
        }

    }

    
    .card-body: {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .4em !important;
    }
    
    .form-styling {
        display: flex;
        flex-direction: column;
        // flex-wrap: wrap;
        align-items: center;
        // justify-content: space-between;
        // padding-left: 5em
    }
    
    //jumbotron styling
    .find-chapter {
        display: flex;
        text-align: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${findChapter});
        background-size: cover;
        padding-top: 25vh;
        height: 50vh;
        
        @media only screen and (max-width: 600px) {
            padding-top: 10vh;
            height: 30vh;
        }
    }
    
    
    //Signup-login Component
    .signup-login {
        display: flex;
        text-align: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${login});
        background-size: cover;
        padding-top: 25vh;
        height: 50vh;
        width: 100vw;
        justify-content: center;
        
        @media only screen and (max-width: 600px) {
            padding-top: 10vh;
            height: 30vh;
        }
    }
    
    .signup-login-form {
        display: flex;
        flex-direction: column;
        padding-top: 2em;
        align-items: center;
        justify-content: center;
    }
    
    //Chapter Component
    .chapter {
        display: flex;
        text-align: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${createChapterDesktop});
        background-size: cover;
        padding-top: 25vh;
        height: 50vh;
        width: 100vw;
        justify-content: center;
        
        @media only screen and (max-width: 600px) {
            background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${createChapter});
            padding-top: 10vh;
            height: 30vh;
        }
    }
    
    .chapter-form {
        display: flex;
        flex-direction: column;
        padding-top: 2em;
        align-items: center;
        justify-content: center;
    }
    
    .chapter-cards {
        background-color: #3b054f !important;
        margin: auto;
        justify-content: center;
        align-items: center;
        margin: 1em;
        border-radius: 10px
        background: #fff;
        box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        padding: .4em;
        cursor: pointer;
    }

    .chapter-cards:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }

    //Users Component
    .users {
        display: flex;
        text-align: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${info});
        background-size: cover;
        padding-top: 25vh;
        height: 50vh;
        width: 100vw;
        justify-content: center;

        @media only screen and (max-width: 600px) {
            padding-top: 10vh;
            height: 30vh;
            width: 100%;
        }
    }

    .users-form {
        display: flex;
        flex-direction: column;
        padding-top: 2em;
        padding-left: 1em;
        align-items: center;
        justify-content: center;
        margin: 0;
    }

`

export const Container1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ed3b7b;
`