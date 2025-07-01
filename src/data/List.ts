import type { MovieType } from "../typescript/Movie";

export const tabList: MovieType[] = [];

export function addToList(Content: MovieType){
    const index = tabList.findIndex(movie=>movie.id === Content.id);

    if (index===-1){
        tabList.push(Content);
    }
}

export function removeToList(Content : MovieType){
    const index = tabList.findIndex(movie=>movie.id===Content.id);

    if (index === 1){
        tabList.splice(index,1);
    }
}