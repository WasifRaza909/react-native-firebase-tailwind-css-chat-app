import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(undefined);


    useEffect(() => {
        // onAuthStateChange

        // setTimeout(() => {
            setIsAuthenticated(false);
        // },3000)
    },[])


    const login = async(email,password) => {
        try {
            
        } catch (error) {
            
        }
    }

    const logout = async() => {
        try {
            
        } catch (error) {
            
        }
    }

    const register = async(email,password, username, profileUrl) => {
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if(!value) {
        throw new Error("use Auth must be wrapped inside AuthContextProvider")
    }

    return value
}