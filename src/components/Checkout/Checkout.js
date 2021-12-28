import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'
import { validarDatos } from '../../helpers/validarDatos'
import { Formik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('Campo requerido')
        .min(4, 'Demasiado corto')
        .max(15, 'Demasiado largo'),
    apellido: Yup.string()
        .required('Campo requerido')
        .min(4, 'Demasiado corto')
        .max(15, 'Demasiado largo'),
    email: Yup.string()
        .required('Campo requerido')
        .email('email inválido'),
    dirección: Yup.string()
        .required('Calle, nº de puerta, apto, esquina'),
})

export const Checkout = () => {

    const { carrito, totalCosto, vaciarCarrito } = useContext(CartContext)

    const initialValues = {
        nombre: '',
        apellido: '',
        email: '',
        dirección: '',
    }

    return (

        <>
            {carrito.length === 0
                ? <Navigate to="/" />
                :
                <div className="container my-5">
                    <h3>Checkout</h3>
                    <hr />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            if (!validarDatos(values)) { return }
                            generarOrden(values, carrito, totalCosto, vaciarCarrito)
                        }}
                    >
                        {(formik) => (
                            <form onSubmit={formik.handleSubmit}>
                                <input
                                    onChange={formik.handleChange}
                                    name="nombre"
                                    value={formik.values.nombre}
                                    className="form-control my-2"
                                    type="text"
                                    placeholder="nombre"
                                />
                                {formik.errors.nombre && <small>{formik.errors.nombre}</small>}

                                <input
                                    onChange={formik.handleChange}
                                    name="apellido"
                                    value={formik.values.apellido}
                                    className="form-control my-2"
                                    type="text"
                                    placeholder="apellido"
                                />
                                {formik.errors.apellido && <small>{formik.errors.apellido}</small>}

                                <input
                                    onChange={formik.handleChange}
                                    name="email"
                                    value={formik.values.email}
                                    className="form-control my-2"
                                    type="text"
                                    placeholder="email"
                                />
                                {formik.errors.email && <small>{formik.errors.email}</small>}

                                <input
                                    onChange={formik.handleChange}
                                    name="dirección"
                                    value={formik.values.dirección}
                                    className="form-control my-2"
                                    type="text"
                                    placeholder="dirección"
                                />
                                {formik.errors.dirección && <small>{formik.errors.dirección}</small>}
                                <button type="submit" className="btn btn-dark">Enviar</button>
                            </form>
                        )}
                    </Formik>
                </div>
            }
        </>
    )
}
