import './profile.css';
import { useUser } from '../context/UserContext';


const Profile = () => {
  const {email, logoutUser} = useUser();
  
  return (
    <main>
        <div className='container vh-100 align-items-center justify-content-center mt-4 mb-4' >
            <div className='card text-center card-profile'>
                <div className='card-header card-header-profile'>
                    <h2 className='card-title'>Perfil de Usuario</h2>
                </div>
            
                <div className='card-body '>
                    <p className='card-text'>Email: {email}</p>
                    <button className='btn btn-danger' 
                    onClick={logoutUser}>Cerrar sesión</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Profile