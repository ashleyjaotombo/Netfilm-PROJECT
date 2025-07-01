import type { Login } from "../typescript/Login";

export const TabLogin : Login[] = [];


export function addLogin(Log : Login){
    const index : number = TabLogin.findIndex(log=>log.mail===Log.mail);

if (index===-1){
    TabLogin.push(Log);
}
}


export function TryLogin(Log : Login){
    const index : number = TabLogin.findIndex(log=>log.mail===Log.mail);

    if (index===-1){
        console.log("Existe pas");
    }
}