import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"




const ItemListContainer =({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {
  setLoading(true)

const collectionRef = categoriaId
? query(collection(db, "productos"), where("categoria", "==", categoriaId))
: collection(db, "productos")


getDocs(collectionRef)
.then(response => {
    const productsAdapted = response.docs.map(doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}
    })
    setProductos(productsAdapted)
})
.catch(error => {
    console.log (error)
})
.finally(()=> {
    setLoading(false)
})




    }, [categoriaId])



    return (

        <div className="navegacion">
            <h1>{greeting}</h1>
            <h2>Hola</h2>
            <ItemList productos= {productos}/>
        </div>
    )

}

export default ItemListContainer;
