import React, { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({img, name, price, cantidad, id}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className="d-inline-flex p-2 justify-content-between align-items-center w-75">
            <img src={img} height="10%" width="10%" />
            <h4>{name}</h4>
            <p>Precio: $ {price}</p>
            <p>Cantidad: {cantidad}</p>
            <button
                className="btn btn-dark"
                onClick={() => { removerDelCarrito(id) }}
            >
                <FaTrashAlt />
            </button>
        </div>
    )
}
