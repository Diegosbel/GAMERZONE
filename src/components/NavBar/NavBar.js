import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import Banner from "./img/BANNER.gif"

function NavBar() {
    return (
        <section className="banner">
            <img src={Banner} alt="Banner" />
            <div className="navBar">
                <div className="navBar-li">
                    <Link to={"/"}>
                        <button className="btn">Inicio</button>
                    </Link>
                    <Link to={"/categoria/consolas"}>
                        <button className="btn">Consolas</button>
                    </Link>
                    <Link to={"/categoria/juegos"}>
                        <button className="btn">Juegos</button>
                    </Link>
                    <Link to={"/Categoria/contacto"}>
                        <button className="btn">Contacto</button>
                    </Link>
                </div>
                <CartWidget />
            </div>
        </section>
    )
}

export default NavBar