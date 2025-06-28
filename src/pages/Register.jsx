import { useState } from 'react';
import './register.css';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault()
        
        if (!email.trim() || !password.trim() || !password2.trim()) {
            setError(true)
            setMessage("¡Todos los campos son obligatorios!")
            return
        }
        else if(password != password2){
            setError(true)
            setMessage("¡Las contraseñas no coinciden!")
            setPassword('')
            setPassword2('')
            return
        }
        setMessage("¡Formulario enviado con exito!")
        setError(false)


        setEmail('')
        setPassword('')
        setPassword2('')        
    
    }

  return (
    <main className='container vh-100 align-items-center justify-content-center mt-4 mb-4'>
        <h1 className='tituloRegister'>Registro</h1>
        <section className="formSection">
            <form className='form' onSubmit={validarDatos}> 
                <div className="mb-3">
                    <label for="InputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="InputEmail1"  aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword" minlength="6" onChange={(e) => setPassword(e.target.value)}
                    value={password}/>
                </div>
                <div className="mb-3">
                    <label for="InputPasswordConfirm" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="InputPasswordConfirm" mminlength="6" onChange={(e) => setPassword2(e.target.value)}
                    value={password2}/>
                </div>
                <p className='message'>{message}</p>
                <button type="submit" className="btn button">Enviar</button>
            </form>
        </section>
    </main>
    
  )
}

export default Register