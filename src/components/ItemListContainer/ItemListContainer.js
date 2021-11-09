import { Container } from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"


export const ItemListContainer = ( {greeting} ) => {


    return (
        <Container className="my-5">
            <h2>{greeting}</h2>
            <hr/>
        </Container>
    )
}