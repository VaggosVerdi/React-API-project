import React, { createContext, useContext, useState } from 'react'

// Context for authentication
const AuthContext = createContext()

// Provider that manages the JWT state
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null) // State for storing the JWT

    // Store the JWT on login
    const login = (jwt) => {
        setToken(jwt)
    }

    // Clear the JWT on logout
    const logout = () => {
        setToken(null) 
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

// Custom hook for the AuthContext
export const useAuth = () => useContext(AuthContext)