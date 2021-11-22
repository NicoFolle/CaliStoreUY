import './NavBar.scss'
import { CartWidget } from '../CartWidget/CartWidget'


export const NavBar = () => {

    return (

        <header className="header">
            <img src="calistoreuy_logo.jpg" alt="Logo CaliStoreUY" height="30%" width="30%" loading="lazy" />

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