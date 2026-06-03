/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { user, createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;