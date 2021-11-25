import React from 'react'
import { Card, Button } from "react-bootstrap"

export const ItemDetail = ({id, name, img, desc, price, category}) => {

    return (
        <Card key={id} className="m-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Precio: $ {price}</Card.Text>
                  <Card.Text>{desc}</Card.Text>
                  <Card.Text>{category}</Card.Text>
                  <Button variant="dark">Agregar a carrito</Button>
                </Card.Body>
              </Card>
    )
}