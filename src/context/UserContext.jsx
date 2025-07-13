import React, { createContext, useState } from 'react'


export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [userToken, SetUserToken] = useState(true);

    const logoutUser = () =>{
        SetUserToken(false)
    }

  return (
    <UserContext.Provider value={{userToken, logoutUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider