import React, { useContext, createContext, useState } from "react";
import type { MovieType } from "../typescript/Movie";


export type ListContextType={
    tabList: MovieType[] | undefined;
    setTabList: React.Dispatch<React.SetStateAction<MovieType[] | undefined>>
}


export const ListContext=createContext<ListContextType | undefined>(undefined);

type Props ={
    children : React.ReactNode
}

export function ListContextProvider({children}:Props){
    const [tabList, setTabList]=useState<MovieType[]>();

    const valueTabList : ListContextType ={
        tabList,
        setTabList,
    }

    return (
        <ListContext.Provider value={valueTabList}>{children}</ListContext.Provider>
    )
}

export function useListContext(){
    const context=useContext(ListContext);

    if (!context){
        throw new Error("Erreur");
    }
    return context;
}

