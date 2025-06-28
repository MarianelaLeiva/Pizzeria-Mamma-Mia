
const userEmail = "usuario@ejemplo.com"
const handleLogout = () => {
  alert("Función no lista aún");
}



const Profile = () => {
  return (
    <main>
        <div className='container vh-100 align-items-center justify-content-center mt-4 mb-4' style={{maxWidth: '400px'}}>
            <div className='card text-center'>
                <div className='card-header'>
                    <h2 className='card-title'>Perfil de Usuario</h2>
                </div>
            
                <div className='card-body '>
                    <p className='card-text'>Email: {userEmail}</p>
                    <button className='btn btn-danger' 
                    onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Profile