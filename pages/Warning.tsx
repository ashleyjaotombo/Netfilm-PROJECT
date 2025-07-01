import { useNavigate } from "react-router-dom"

export default function Warning(){
    const navigate=useNavigate();
    return (
        <>
            <div className="bg-red-600 h-screen w-screen  brightness-50">
            
            </div>
            <div className="absolute top-48 text-white text-center p-2 text-2xl">
                <p className="mt-24">Ce site est un projet étudiant à des fins pédagogiques, non affilié à Netflix, Allociné ou YouTube. Les visuels et vidéos sont utilisés uniquement à titre d'apprentissage.</p>
                <button className="m-8 p-4 bg-zinc-500 rounded-md hover:bg-zinc-300" 
                    onClick={()=>navigate("/welcome")}>
                    Voir le site
                </button>
            </div>
        </>
        
        

    )
    
}