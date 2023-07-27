import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

function NavBar() {
    return (
        <section className="banner">
            <div className="navBar">
                <Link to={"/"} className="logo" >GAMERZONE</Link>
                <div className="navBar-li">
                    <Link to={"/"} className="lista">Inicio</Link>
                    <Link to={"/categoria/consolas"} className="lista">Consolas</Link>
                    <Link to={"/categoria/juegos"} className="lista">Juegos</Link>
                    <Link to={"/Categoria/contacto"} className="lista">Contacto</Link>
                </div>
                <CartWidget />
            </div>
        </section>
    )
}

export default NavBar