import React from 'react'
import { Card, Button } from "react-bootstrap"

export const Item = ({id, name, img, desc, price}) => {
    return (
        <Card key={id} className="m-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Precio: $ {price}</Card.Text>
                  <Card.Text>{desc}</Card.Text>
                  <Button variant="dark">Agregar a carrito</Button>
                </Card.Body>
              </Card>
    )
}
