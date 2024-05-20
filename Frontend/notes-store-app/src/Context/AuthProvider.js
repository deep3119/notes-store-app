import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const intialAuthuser = localStorage.getItem('Users');
    const [authuser, setAuthuser] = useState(
        intialAuthuser ? JSON.parse(intialAuthuser) : undefined
    );
    return (
        <AuthContext.Provider value={[authuser, setAuthuser]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
export const useAuth=()=>useContext(AuthContext);
