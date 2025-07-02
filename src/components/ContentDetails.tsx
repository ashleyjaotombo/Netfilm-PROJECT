import { useState,useEffect } from "react";
import type { MovieType } from "../typescript/Movie";
import { useMovieContext } from "../context/MovieContext";
import { useAutoplayContext } from "../context/AutoplayContext";
import { usePlayContext } from "../context/PlayContext";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import { useListContext } from "../context/ListContext";


type ContentProps = {
    Content : MovieType
}

function ContentDetails({ Content }: ContentProps) {
    const [message, setMessage]=useState(false);
    const movieContext=useMovieContext();
    const autoplayContext = useAutoplayContext();
    const MoviePlay=usePlayContext();
    const navigate=useNavigate();
    const LogContext=useLoginContext();
    const ListContext=useListContext();
    const [add, setAdd]=useState(false);
    const [valueofbutton, setValueofbutton] =useState("");
    
    useEffect(() => {
        if (add) {
            setValueofbutton("✓");
        } else {
            setValueofbutton("+");
        }
    }, [add]);
    
    
      const handleAddToList = (Content : MovieType) => {
        if (!ListContext.tabList){
          const newTab : MovieType[] = [Content];
          ListContext.setTabList(newTab);
        }
        else{
          const index = ListContext.tabList.findIndex(movie=>movie.id===Content.id);
    
          if (index===-1){
            const updatedList : MovieType[]= [...ListContext.tabList, Content ];
            ListContext.setTabList(updatedList);
          }
        }
        
      }




  return (
    <div className="fixed right-1/2 translate-x-1/2 w-7/12 h-[730px] top-[50%] translate-y-[-50%] bg-zinc-800 z-50 rounded-xl brightness-100">
        <div className="relative">
            
            <iframe
                className="w-full h-[500px] rounded-xl object-cover absolute z-0"
                src={Content.trailer_url}
                allow="autoplay"
                allowFullScreen
            ></iframe>
            <button className="absolute h-12 w-12 bg-zinc-600 rounded-full top-3 right-7 hover:bg-zinc-400">
                <h5 className="text-3xl text-white zinc-100 flex items-center justify-center pb-1"
                onClick={()=>{
                    movieContext.setMovieValue(undefined);
                    autoplayContext.setAutoplayValue(false);
                }
                }
                >
                    ×
                </h5>
            </button>
            <div className="flex relative top-[510px] gap-10 h-12 ml-8 items-center">
                <button className="bg-white text-smzinc-800 px-8 py-2 font-bold hover:bg-zinc-400 rounded-md flex items-center"
                onClick={()=>{
                    MoviePlay.setValuePlay(Content);
                    navigate("/broadcast");
                }}
                >
                    ▶   Lecture
                </button>
            
                <button
                  className="relative text-white h-10 w-10 flex items-center justify-center font-bold rounded-full border-2 p-1 border-zinc-400 text-sm hover:border-white"
                  onMouseOver={() => setMessage(true)}
                  onMouseLeave={() => setMessage(false)}
                  onClick={()=>{
                      console.log(LogContext.loginValue)
                      if (LogContext.loginValue){
                        handleAddToList(Content);
                        setAdd(true);
                        setTimeout(()=>{
                          setAdd(false)
                        }, 1000)
                      }
                      else{
                        navigate("/signup");
                      }
                    }}>
                
                  {valueofbutton}
                  {message && (
                        <h5 className="absolute p-1 text-zinc-800 bg-zinc-300 text-sm text-smblack translate-y-[-40px] w-36 rounded-md">
                        Ajouter à Ma liste
                        </h5>
                    )}    
                </button>
            </div>
        </div>
        
        <div className="flex relative mt-[530px] w-full gap-4 text-white">
            <div className="flex-col w-60">
                <div className="flex gap-6 ml-6 items-center ">  
                    <h5 className=" rounded-md border-white border-2 px-2">{Content.age}+</h5>
                    <h5>{Content.duration}</h5>
                    <h5 className="rounded-md border-white border-2 px-2">HD</h5>                
                </div>
                <h5 className="italic ml-6 mt-2">Date : {Content.date}</h5>
                <h5 className="ml-6 mt-4 w-[500px] whitespace-normal">{Content.description}</h5>    
            </div>
            <div className="flex flex-col gap-2 mt-4 ml-72">
                <h5 className="text-sm whitespace-normal"> <span className="text-zinc-400">Distribution :</span> {Content.distribution}</h5>
                <h5 className="text-sm whitespace-normal"><span className="text-zinc-400">Genre :</span>{Content.genre}</h5>
                <h5 className="text-sm whitespace-normal"><span className="text-zinc-400">Un programme : </span>{Content.type}</h5>
            </div>
        </div>
        
    </div>
  );
}


export default ContentDetails;
