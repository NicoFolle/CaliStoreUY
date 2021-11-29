import { useState } from "react"


export const ItemCount = ( {max, cantidad, setCantidad, onAdd} ) => {

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="my-3">
            <button className="btn btn-dark" onClick={handleRestar}>
                -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button className="btn btn-dark" onClick={handleSumar}>
                +
            </button>
            <br/>
            <button className="btn btn-dark my-2" onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>            
    )
}