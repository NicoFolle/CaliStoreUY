import React from 'react'
import Swal from 'sweetalert2'

export const validarDatos = (values) => {

    if (values.nombre.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido',
          })
          return false
    }

    if (values.apellido.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Apellido inválido',
          })
          return false
    }

    if (values.email.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Email inválido',
          })
          return false
    }

    if (values.dirección.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Dirección inválida',
          })
          return false
    }

    return true
}