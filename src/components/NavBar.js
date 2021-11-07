import img from './calistoreuy_logo.jpg'

export const NavBar = () => {

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand col-lg-3 col-sm-4 col-6" href="#">
                        <img src={img} alt="Logo CaliStoreUY" height="30%" width="30%" loading="lazy"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="" title="Página principal de CaliStoreUY">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Galería de equipamientos">Equipamiento</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Galería de indumentaria">Indumentaria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Galería de accesorios">Accesorios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Formulario de contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Formulario de acceso">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}