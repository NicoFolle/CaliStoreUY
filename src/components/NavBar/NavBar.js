import './NavBar.scss'
import img from './calistoreuy_logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget'


export const NavBar = () => {

    return (

        <header className="header">
            <img src={img} alt="Logo CaliStoreUY" height="30%" width="30%" loading="lazy" />

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Equipamiento</li>
                    <li>Indumentaria</li>
                    <li>Accesorios</li>
                    <li>Contacto</li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    )
}