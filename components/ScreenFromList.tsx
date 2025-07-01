import type { MovieType } from "../typescript/Movie";
import { useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import { useAutoplayContext } from "../context/AutoplayContext";
import { useNavigate } from "react-router-dom";
import { usePlayContext } from "../context/PlayContext";
import { useListContext } from "../context/ListContext";


type ContentProps = {
  Content: MovieType;
};

function ContentScreen({ Content }: ContentProps) {
  const [hovered, setHovered] = useState(false);
  const [printButton, setPrintButton] = useState(false);
  const MovieContext=useMovieContext();
  const autoplayContext = useAutoplayContext();
  const PlayContext=usePlayContext();
  const navigate=useNavigate();
  const ListContext=useListContext();


  const handleRemove =(Content : MovieType) => {
    const updatedList = ListContext.tabList?.filter(movie => !(movie.id === Content.id))
    ListContext.setTabList(updatedList);
  }

  return (
    <div
      className="mt-4 h-96 w-64 flex-none hover:h-full"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className={`h-full w-full ${hovered ? "opacity-0" : "opacity-100"}`}
        src={Content.image_url}
      />

      {hovered && (
        <div className="absolute top-0 z-30 h-[431px] w-64 flex-none">
          <div className="ml-0 h-[430px] w-[330px] translate-x-[-15%] rounded-lg bg-zinc-800 transition-all duration-1000">
            <img
              className="m-0 h-[300px] w-full rounded-lg"
              src={Content.image_url}
            />
            <section className="relative z-30 mt-2 flex gap-5">
              <button className="ml-4 h-8 w-auto rounded bg-white px-4 py-1 text-base font-bold text-black hover:bg-zinc-200"
                onClick={()=>{
                  PlayContext.setValuePlay(Content);
                  console.log(PlayContext.valuePlay);
                  navigate("/broadcast");
                }}
                >
                  Lecture
              </button>
              
              <button className="w-autotext-base h-8 rounded bg-zinc-500 px-4 py-1 font-bold text-white hover:bg-zinc-200 hover:text-black"
              onClick={()=>{
                MovieContext.setMovieValue(Content);
                autoplayContext.setAutoplayValue(true);
            }
            }
              >
                Plus d'infos
              </button>
              <div className="relative">
                <button
                  className="relative ml-6 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 text-3xl font-bold text-white transition hover:bg-zinc-500"
                  onMouseOver={() => setPrintButton(true)}
                  onMouseLeave={() => setPrintButton(false)}
                  onClick={()=>handleRemove(Content)}>
                
                  -
                </button>
                {printButton && (
                  <div className="absolute rounded-md bg-zinc-300 p-1 text-black">
                    <h4>
                      Supprimer de ma liste
                    </h4>
                  </div>
                )}
              </div>
            </section>
            <section className="ml-4 mt-3 flex gap-5">
              <h5 className="rounded-sm border-2 border-white p-1 text-white">
                {Content.age} +
              </h5>
              <h5 className="p-1 text-white">{Content.duration}</h5>
              <h5 className="rounded-sm border-2 border-white p-1 text-white">
                HD
              </h5>
            </section>
            <h5 className="ml-4 mt-3 text-white">{Content.genre}</h5>
          </div>
        </div>
      )}

    </div>
  );
}

export default ContentScreen;
