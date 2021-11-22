import { useState } from "react"
import './ItemCount.scss'


export const ItemCount = () => {

    const [clicks,setClicks] = useState(0)

    const handleClicksPlus = () => {
        setClicks(clicks + 1)
    }

    const handleClicksMinus = () => {
        setClicks(clicks - 1)
    }

    return (
        <div className="contenedor">
            <div className="itemName">
                <p>Item</p>
            </div>
            <div className="itemCount">
            <button onClick={handleClicksPlus}> + </button> 
            {clicks}
            <button onClick={handleClicksMinus}> - </button>    
            </div>
            <div>
                <button>Agregar a carrito</button>
            </div>
            

        </div>
    )
}