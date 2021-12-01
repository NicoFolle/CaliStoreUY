import { useContext } from 'react'
import { BsFillBagFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <div>
            <BsFillBagFill className="cartWidget"/>
            <span>{totalCantidad()}</span>
        </div>
    )
}