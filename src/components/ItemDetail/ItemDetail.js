import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, desc, price, category, stock}) => {

    const navigate = useNavigate()
    const [cantidad,setCantidad] = useState(0)
    const [agregado,setAgregado] = useState(false)

    const handleVolver = () => {
      navigate(-1)
    }

    const handleVolverInicio = () => {
      navigate('/')
    }

    const handleAgregar = () => {
      if (cantidad > 0) {setAgregado(true)}
    }


    return (
        <Card key={id} className="m-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>Precio: $ {price}</Card.Text>
                  <Card.Text>{desc}</Card.Text>
                  <Card.Text>{category}</Card.Text>

                  {
                    !agregado
                    ?   <ItemCount 
                            max={stock} 
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    : <Link to="/cart" className="btn btn-dark d-block my-3">Terminar compra</Link>
                  }

                  <Button variant="dark" onClick={handleVolver}>Volver</Button>
                  <Button className="mx-2" variant="dark" onClick={handleVolverInicio}>Volver al inicio</Button>
                </Card.Body>
              </Card>
    )
}