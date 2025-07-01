import { useNavigate } from "react-router-dom";
import { tabList } from "../data/List";
import SectionFromList from "../components/SectionFromList";
import { useListContext } from "../context/ListContext";

export default function MyList(){
    const navigate=useNavigate();
    const ListContext=useListContext();
    console.log(ListContext.tabList);

    return (
        
      <div className="bg-black h-screen w-screen relative">
        
        <button className="bg-zinc-700 py-2 px-4 rounded-md m-4"
        onClick={()=>navigate("/welcome")}
            >Retour
        </button>

        <SectionFromList nameSection="Ma liste" tabContent={tabList}/>

        { (!ListContext.tabList || ListContext?.tabList.length===0) && (
            <p className="absolute top-48 mx-14 text-red-500">Votre liste est vide.</p>
        )}

      </div>  
    );
}

