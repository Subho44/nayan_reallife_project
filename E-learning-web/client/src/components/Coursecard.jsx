import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Coursecard = ({course}) => {
  return <>
    <Card data-aos="fade-up" style={{width:'18rem', margin:'1rem'}}>
    <Card.Img variant='top' src={course.image}/>
   <Card.Body>
    <Card.Title>{course.title}</Card.Title>
    <Card.Text>{course.description}</Card.Text>
    <Button variant='primary'>Enroll Now</Button>
   </Card.Body>

    </Card>
  </>
}

export default Coursecard