import { createContext, use, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

  export const UserProvider = ({children}) => {
    const [userToken, setUserToken] = useState(() => localStorage.getItem('userToken'));
    const [email, SetEmail] = useState(null);

    const logoutUser = () =>{
      setUserToken(null);
      SetEmail(null);
      localStorage.removeItem('userToken');
    }

    const getProfile = async () => {
      if (!userToken) return;

      try {
        const response = await fetch('http://localhost:5000/api/auth/me', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Token invalido o expirado');
      }

      const data = await response.json();
      SetEmail(data.email);
      } catch (error) {
        console.error('Error fetching profile:', error);
        logoutUser(); 
      }
    };

    useEffect(() => {
      if (userToken) {
        getProfile();
      }else {
        SetEmail(null);
      }
    }, [userToken]);

    const login = async ({ email, password }) => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setUserToken(data.token);
          localStorage.setItem('userToken', data.token);
          await getProfile();
          return { success: true };
        } else {
          return { success: false, message: data.message || 'Error al iniciar sesión' };
        }
      } catch (error) {
        console.error('Error during login:', error);
        return { success: false, message: error.message };
      }
    };

    const register = async ({ email, password }) => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok && data.token) {
          SetUserToken(data.token);
          localStorage.setItem('userToken', data.token);
          await getProfile();
          return { success: true };
        } else {
          return { success: false, message: data.message || 'Error al registrarse' };
        }
      } catch (error) {
        console.error('Error during registration:', error);
        return { success: false, message: error.message };
      }
    };
  
  
  return (
    <UserContext.Provider value={{userToken, logoutUser, email, login, register}}>
        {children}
    </UserContext.Provider>
  )
  }

export const useUser = () => useContext(UserContext) ;