import { useContext, createContext, useState} from "react";
import type { Login } from "../typescript/Login";


export type LoginContextType = {
    loginValue : Login | undefined,
    setLoginValue : React.Dispatch<React.SetStateAction<Login | undefined>>
}


export const LoginContext = createContext<LoginContextType | undefined>(undefined);

type Props={
    children : React.ReactNode;
}

export default function LoginContextProvider({children}:Props){
    const [loginValue, setLoginValue]=useState<Login>();
    
    const valueLoginContext : LoginContextType ={
        loginValue,
        setLoginValue,
    }

    return (
        <LoginContext.Provider value={valueLoginContext}>{children}</LoginContext.Provider>
    )

}

export function useLoginContext(){
    const context=useContext(LoginContext);
    if (!context) {
    throw new Error("Erreur");
  }
  return context;
}