import { doc, getDoc } from 'firebase/firestore/lite'
import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from 'react-router'
import { db } from '../../firebase/config'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState()

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally( () => {
                setLoading(false)
            })
    }, [itemId])
    
    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader/>
                    : <ItemDetail {...item}/>
            }
        </div>
    )
}
