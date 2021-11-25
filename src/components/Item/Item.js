import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

export const Item = ({id, name, img, desc, price, category}) => {
    return (
        <Card key={id} className="m-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Precio: $ {price}</Card.Text>
                  <Card.Text>{category}</Card.Text>
                  <Link to={`/detail/${id}`} className="btn btn-dark">Ver más</Link>
                </Card.Body>
              </Card>
    )
}
