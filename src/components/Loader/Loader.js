import React from 'react'
import { ImSpinner9 } from 'react-icons/im'
import './Loader.scss'

export const Loader = () => {
    return (
        <div className="loader">
            <ImSpinner9 className="loaderIcon"/>
            <h3 className="mx-3">Cargando...</h3>
        </div>
    )
}
