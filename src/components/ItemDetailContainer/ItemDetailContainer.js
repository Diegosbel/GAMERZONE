import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



function ItemDetailContainer() {

    const [productos, setProductos] = useState(null)

    const {itemId} = useParams()


    useEffect (()=> {
        getProductById(itemId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])


    return (
        <div>
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;

