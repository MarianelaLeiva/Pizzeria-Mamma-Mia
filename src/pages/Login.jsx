import { useState } from 'react';
import { useUser } from '../context/UserContext';
import './login.css';


export const Login = () => {
    const { login } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    
        const validarDatos = async (e) => {
            e.preventDefault()
            
            if (!email.trim() || !password.trim()) {
                setError(true)
                setMessage("¡Todos los campos son obligatorios!")
                return
            }

            if (password.length < 6) {
                setError(true)
                setMessage("¡La contraseña debe tener al menos 6 caracteres!")
                return
            }

            const response = await login({ email, password });

            if (response.success) {
                setError(false);
                setMessage("¡Inicio de sesión exitoso!");
                setEmail('');
                setPassword('');
                
            } else {
                setError(true);
                setMessage(response.message || "¡Error al iniciar sesión!");
            }
        }
    
    return (
      <main className='container vh-100 align-items-center justify-content-center mt-4 mb-4'>
          <h1 className='tituloLogin'>Login</h1>
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
                  <p className='message'>{message}</p>
                  <button type="submit" className="btn button">Enviar</button>
              </form>
          </section>
      </main>
      
    )
}

export default Login;