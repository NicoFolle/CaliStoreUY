import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const { carrito, vaciarCarrito } = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length > 0
                    ? <>
                        <h2>Cart View</h2>
                        <hr />
                        <section>
                            {
                                carrito.map((prod) => <CartItem {...prod} />)
                            }
                        </section>
                        <hr />
                        <div>
                            <button className="btn btn-dark" onClick={vaciarCarrito}>Vaciar carrito</button>
                            <button className="btn btn-dark mx-3">Ir al checkout</button>
                        </div>
                    </>

                    : <>
                        <h2>Tu carrito está vacío</h2>
                        <hr />
                        <Link to="/" className="btn btn-dark">Inicio</Link>
                    </>
            }
        </div>
    )
}
