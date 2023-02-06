import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StartRating from '../startrating/StartRating'
import './MovieCard.css'

const MovieCard = ({el, del}) => {
  return (
    <div className='card'>
      <Card style={{ width: '18rem' ,borderColor:'blue'}}>
      <Card.Img style={{ width: '18rem'}} variant="top" src={el.posteurl} />
      <Card.Body>
        <div className='div'>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          <h5>release date :{el.date}</h5>
          <StartRating rate={el.rate}/>
        </Card.Text>
        </div>
        <div className='bouton'>
        <Link to={`/el/${el.id}`} ><Button variant="primary">More detail</Button></Link>
        <Button onClick={()=>del(el.id)}>Delete</Button>
        </div>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard