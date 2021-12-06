import './NavBar.scss'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const NavBar = () => {

    return (

        <header className="header">
            <Link to="/"><img src="calistoreuy_logo.jpg" alt="Logo CaliStoreUY" height="30%" width="30%" loading="lazy" /></Link>
            <nav>
                <ul>
                    <li><Link to="productos/equipamiento">Equipamiento</Link></li>
                    <li><Link to="productos/vestimenta">Vestimenta</Link></li>
                    <li><Link to="productos/accesorios">Accesorios</Link></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}