import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setProductos(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    },[])


    return (
        <>
            {
                loading
                    ? <h2>Cargando productos...</h2>
                    : <ItemList productos={productos}/>
            }
        </>
    )
}