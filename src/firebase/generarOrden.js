import {query, collection, writeBatch, where, Timestamp, addDoc, getDocs, documentId} from 'firebase/firestore/lite'
import { db } from './config'
import Swal from 'sweetalert2'



export const generarOrden = async (values, carrito, totalCosto, vaciarCarrito) => {

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