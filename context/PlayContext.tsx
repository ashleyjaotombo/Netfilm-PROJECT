import { createContext, useContext, useState } from "react";
import type { MovieType } from "../typescript/Movie";



export type PlayContextType={
    valuePlay: MovieType,
    setValuePlay: React.Dispatch<React.SetStateAction<MovieType>>
}

const defaultMovie:MovieType = {
    id: 25,
    name: "The Platform",
    date: "2019-11-08",
    description: "Dans une prison verticale, les détenus se battent pour survivre tandis que la nourriture descend étage par étage.",
    image_url: "/Images/Movies/theplatform.jpg",
    video_url: "https://www.youtube.com/embed/U6zPkPtPvW0?autoplay=1",
    trailer_url: "https://www.youtube.com/embed/Q6kEozJ4nrw?autoplay=1",
    distribution: "Iván Massagué, Antonia San Juan",
    duration: "1 h 34 min",
    genre: "Science-fiction, Horreur",
    age: 18,
    theme: "Inégalités, Prison, Métaphore sociale",
    type: "Science-Fiction"
  }

export const PlayContext =createContext<PlayContextType>({
    valuePlay: defaultMovie,
    setValuePlay: ()=>{},
});

type Props ={
    children : React.ReactNode
}



export function PlayContextProvider({children}:Props){
    const [valuePlay, setValuePlay]=useState<MovieType>(defaultMovie);

    const ValueContext : PlayContextType = {
        valuePlay,
        setValuePlay,
    }

    return (
        <PlayContext.Provider value={ValueContext}>{children}</PlayContext.Provider>
    );
}


export function usePlayContext(){ 
    return useContext(PlayContext);
};