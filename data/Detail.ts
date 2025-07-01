import type { MovieType } from "../typescript/Movie";

export const Detail : MovieType[] = [];

export function changeValue(Content : MovieType){
    if (Detail.length===0){
        Detail.push(Content);
    }
    else {
        Detail.splice(0,1);
    }
    
}
