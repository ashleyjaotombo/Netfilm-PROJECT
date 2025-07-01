import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login } from "../typescript/Login";
import { addLogin, TabLogin } from "../data/Login";
import { useLoginContext } from "../context/LoginContext";

function Log(){
    const navigate=useNavigate();
    const [name, setName]=useState("");
    const [mail, setMail]=useState("");
    const [password, setPassword]=useState("");
    const LogContext=useLoginContext();

    const [verification,setVerification]=useState(false);

    function handleSubmit(e : React.FormEvent){
        e.preventDefault();
        const login : Login = {name, mail, password};
        const index=TabLogin.findIndex(log=>log.mail===mail);

        if (index===-1){
            addLogin(login);
            setVerification(false);
            setName("");
            setMail("");
            setPassword("");
            LogContext.setLoginValue(login);
            navigate("/welcome"); 
        }
        else {setVerification(true)};
    
    }

    return (
        <div className=" relative h-screen w-screen flex flex-col items-center justify-center">
            <img className=" absolute h-full w-full object-cover brightness-[20%]" src="/Images/loginbackground.jpg"/>

            <ul className="absolute top-0 flex justify-between text-white w-[95%] m-4">

                <li>
                    <button className="bg-zinc-700 py-2 px-4 rounded-md"
                        onClick={()=>navigate("/welcome")}
                        >Retour
                    </button>
                </li>

                <li>
                    <ul className="flex gap-8">
                        <li><button className="rounded-md bg-red-600 px-4 py-2"
                        onClick={()=>navigate("/log")}
                        >Connexion</button></li>
                        <li><button className="rounded-md bg-zinc-400 px-4 py-2"
                        onClick={()=>navigate("/signup")}
                        >Créer un compte</button></li>
                    </ul>
                </li>

            </ul>
            

            <div className=" h-[70%] w-[520px] bg-zinc-800/80 flex flex-col items-center brightness-100 rounded-md">
                <form className="m-4" onSubmit={handleSubmit}>
                    <h1 className="text-3xl text-white font-bold mb-8">Créer un compte</h1>

                    {verification && (
                        <p className="text-red-600">Un compte est déjà associé à cette adresse mail.</p>
                    )}

                    <input className="px-2 py-4 mb-8 w-96 rounded-sm bg-transparent text-zinc-400 border" 
                    type="text" placeholder="Nom" value={name} onChange={(e)=>setName(e.target.value)}/><br/>

                    <input className="px-2 py-4 mb-10 w-96 rounded-sm bg-transparent text-zinc-400 border" 
                    type="email" placeholder="E-mail" autoComplete="username" value={mail} onChange={(e)=>setMail(e.target.value)}/><br/>

                    <input className="px-2 py-4 mb-8 w-96 rounded-sm bg-transparent text-zinc-400 border" 
                    type="password" placeholder="Mot de passe" autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>

                    <button className="bg-red-600 text-white w-96 text-center py-2 rounded-sm" 
                    type="submit">
                        Créer mon compte</button>

                    <h2 className="text-zinc-500 text-center m-4">OU</h2>

                    <button className="bg-zinc-500/80 w-96 py-2 rounded-sm text-white" type="button"
                    onClick={()=>navigate("/log")}
                    >M'identifier</button>

                </form>
            </div>
        </div>
    );
}

export default Log;
