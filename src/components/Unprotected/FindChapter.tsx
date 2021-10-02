import React, { Component } from 'react'
import { Input, Card, CardImg, CardBody, CardTitle, CardText, Jumbotron, Container } from 'reactstrap'
import { Chapter } from '../../types'
import logo from '../../assets/findchapter.jpg'
import bfusalogo from '../../assets/logo.png'
import APIURL from '../../utils/Environment'

type FindChapterProps = {
}

type FindChapterState = {
    chapters: Chapter[]
    dropdownOpen: boolean
    allChapters: Chapter[]
}

class FindChapter extends Component<FindChapterProps, FindChapterState> {
    constructor(props: FindChapterProps) {
        super(props)
        this.state ={
            chapters: [], 
            dropdownOpen: false,
            allChapters: []
        }
    }

    toggle = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen  })
    }

    fetchChapters = (): void => {
        fetch(
            `${APIURL}/chapter/all`, {
                method: "GET",
                headers: new Headers({
                "Content-Type": "application/json",
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ chapters: data, allChapters: data })
            })
            .catch((err) => {
                console.error(err);
            });
        };
        
    filterChapters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        const value = target.value.toLowerCase()

        const chapterSearch = this.state.allChapters.filter
        (chapter => (`${chapter.chapterState}`.toLowerCase().includes(value)))
        this.setState({ chapters: chapterSearch})
    }
    
    chapterMapper = (): JSX.Element[] => {
        return this.state.chapters.map((chapter: Chapter, index: number) => {
        return (
            <Card size='xs' className='chapter-cards' key={index}>
                <a href={chapter.chapterWebsite} target='_blank'>
                <CardImg className='card-body' top width="25%" src={bfusalogo} />
                <CardBody className='card-body'>
                    <CardTitle tag='h2'>{chapter.chapterName}</CardTitle>
                    <CardText>{chapter.chapterCity}</CardText>
                    <CardText>{chapter.chapterState}</CardText>
                    <CardText>{chapter.chapterPhone}</CardText>
                    <a href={chapter.chapterWebsite} target='_blank'><CardText>Tap to Visit</CardText></a>
                </CardBody>
                </a>
            </Card>
        )
        })
    }
    
    componentDidMount = (): void => {
        this.fetchChapters()
    }
    
    render() {
        return (
            <div>
            <Jumbotron className='find-chapter' fluid>
                <Container fluid>
                    <h1 className='display-3'>Find a Chapter Near You</h1>
                </Container>
            </Jumbotron>
            <h2 style={{textAlign: 'center', paddingTop: '1em'}}>Chapter List</h2>
            <hr />
            <div>
                <Input placeholder="Search by State Abbreviation" onChange={this.filterChapters} />
            </div>
            <div className='cardsContainer'>
                {this.chapterMapper()}
            </div>
            </div>
        )
    }
}

export default FindChapter