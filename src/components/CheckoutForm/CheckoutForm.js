import { useState } from "react";
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input
                        required
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label>
                    Telefono
                    <input
                        required
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        required
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className="btn_form" >
                    <button className="btn_comprar" type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;