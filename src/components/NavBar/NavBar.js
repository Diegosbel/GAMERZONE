import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (

        <div>
            <h3>GAMERZONE</h3>
            <div>
                <button>Inicio</button>
                <button>Consolas</button>
                <button>Juegos</button>
                <button>Contacto</button>
            </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar