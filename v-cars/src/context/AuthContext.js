"use client"
import {createContext, useState, useEffect, useContext} from 'react';
import axios from 'axios';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ''
    });

    useEffect(() => {
        const loadContent = async() => {
            try {
                const data = await localStorage.getItem('user');
                if (data) {
                    const parseData = JSON.parse(data);
                    setAuth({
                        user: parseData.user,
                        token: parseData.token
                    })
                    axios.default.headers.common["Authorization"] = `Bearer ${parseData.token}`
                }
            } catch (error) {
                console.log(error);
            }
        }

        loadContent();
    }, []);

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuth = () => useContext(AuthContext);
export {useAuth, AuthProvider};



