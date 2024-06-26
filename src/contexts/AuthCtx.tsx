import { createContext, useEffect, useState } from "react";
import { PropsChildren } from "../types";
import { signIn } from "../services/auth";
import { User, AuthContext } from "../types";

export const AuthCtx = createContext<AuthContext>({} as AuthContext);

const AuthProvider = ({ children }: PropsChildren) => {
    const [user, setUser] = useState<null | User>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const login = async (email: string, senha: string) => {
        setLoading(true);
        const dados = await signIn(email, senha);
        console.log(dados);

        if (dados.user) {
            setUser(dados.user);
            setLoading(false);
            return(true);

        }
        setLoading(false);
        return(false);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthCtx.Provider value={{ user, login, logout, signed: !!user, loading }}>
            {children}
        </AuthCtx.Provider>
    );
};

export default AuthProvider;