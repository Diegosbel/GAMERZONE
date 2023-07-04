import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail ({id, nombre, imagen, categoria, descripcion, precio, stock}) {

    return (
        <article className="card">
            <header className="titulo">
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} className="imgCard" alt= {nombre}/>
            </picture>
            <section>
                <p className="descripcion">
                    Descripcion: {descripcion}
                </p>
                <p className="descripcion">
                    Precio: ${precio}
                </p>
            </section>
            <footer>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada =" ,quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;












