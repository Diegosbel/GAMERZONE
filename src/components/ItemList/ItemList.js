import Item from "../Item/Item";
import "./ItemList.css"


function ItemList ({productos}) {

    return (

        <div className="productos">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;