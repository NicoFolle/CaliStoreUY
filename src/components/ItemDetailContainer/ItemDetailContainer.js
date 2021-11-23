import React from 'react'
import { useEffect, useState } from "react"
import { getItem } from "../../helpers/getItem"
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState([])

    useEffect(() => {

        setLoading(true)
        getItem()
            .then( (resp) => {
                setItem(resp.find(producto => producto.id === 6)
            )})
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    },[])
    console.log(item)

    return (
        <>
            {
                loading
                    ? <h2>Cargando producto</h2>
                    : <ItemDetail {...item}/>
            }
        </>
    )
}
