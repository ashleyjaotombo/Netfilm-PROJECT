import { useNavigate } from "react-router-dom";
import { usePlayContext } from "../context/PlayContext";

export function Broadcast(){
    const MovieContext=usePlayContext();
    const Movie=MovieContext.valuePlay;
    const navigate=useNavigate();

    return (
        <div className="aspect-video w-full h-screen bg-black">
            <button className="bg-zinc-500 text-white rounded-md w-32 h-10 m-4"
            onClick={()=>navigate(-1)}
            >
                Retour
            </button>
            {Movie && (
                <iframe
                    className="w-full h-5/6"
                    src={Movie.video_url}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
            ></iframe>
            )}
            
        </div>
        
    );
}
