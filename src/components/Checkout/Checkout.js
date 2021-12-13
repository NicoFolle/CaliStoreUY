import { addDoc, collection, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore/lite'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { validarDatos } from '../../helpers/validarDatos'

export const Checkout = () => {

    const { carrito, totalCosto, vaciarCarrito } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        dirección: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validarDatos(values)) { return }

        const orden = {
            buyer: { ...values },
            items: carrito,
            total: totalCosto(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const orderRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = carrito.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(orderRef, orden)
                .then((resp) => {
                    batch.commit()
                    Swal.fire({
                        icon: 'success',
                        title: 'Compra realizada',
                        text: `Orden: ${resp.id}`
                    })
                    vaciarCarrito()
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Producto sin stock',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }


    }


    return (

        <>
            {carrito.length === 0
                ? <Navigate to="/" />
                :
                <div className="container my-5">
                    <h3>Checkout</h3>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="form-control my-2"
                            type="text"
                            placeholder="nombre"
                        />
                        {values.nombre.lenght < 4 && <small>Nombre inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="form-control my-2"
                            type="text"
                            placeholder="apellido"
                        />
                        {values.apellido.lenght < 4 && <small>Apellido inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control my-2"
                            type="text"
                            placeholder="email"
                        />
                        {values.email.lenght < 4 && <small>Email inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="dirección"
                            value={values.dirección}
                            className="form-control my-2"
                            type="text"
                            placeholder="dirección"
                        />
                        {values.dirección.lenght < 4 && <small>Nombre inválido</small>}
                        <button type="submit" className="btn btn-dark">Enviar</button>
                    </form>
                </div>
            }
        </>
    )
}
