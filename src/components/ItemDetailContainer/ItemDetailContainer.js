import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router'
import { getItem } from "../../helpers/getItem"
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState()

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        getItem()
            .then( resp => {
                setItem(resp.find(prod => prod.id === Number(itemId)))
            })
            .finally( () => {
                setLoading(false)
            })
    }, [itemId])
    
    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando producto...</h2>
                    : <ItemDetail {...item}/>
            }
        </div>
    )
}
