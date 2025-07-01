import Banner from "../components/Banner";
import data from "../data/Movies.json";
import type { MovieType } from "../typescript/Movie";
import ContentSection from "../components/ContentSection";
import ContentDetails from "../components/ContentDetails";
import { useMovieContext } from "../context/MovieContext";



function App() {
  const random = Math.floor(Math.random()*15);
  const content: MovieType = data[random] as MovieType;
  const contentTab: MovieType[] = data as MovieType[];
  const contentAction: MovieType[] = contentTab.filter(
    (content) => content.type === "Action",
  );
  const contentScienceFiction: MovieType[] = contentTab.filter(
    (content) => content.type === "Science-Fiction",
  );
  const contentThriller: MovieType[] = contentTab.filter(
    (content) => content.type === "Thriller",
  );
  const contentFantastique: MovieType[] = contentTab.filter(
    (content) => content.type === "Fantastique",
  );
  const contentDrame: MovieType[] = contentTab.filter(
    (content) => content.type === "Drame",
  );

  
  const context=useMovieContext();
  const MovieValue=context.MovieValue;


  return (
    <>
        { MovieValue && (
            <ContentDetails Content={MovieValue}/>
        )}
        <div className={`bg-black ${MovieValue? "brightness-[30%]" : "brightness-100"}`}>
        
            <Banner Content={content} />
            <ContentSection nameSection="Nouveaux" tabContent={contentTab} />
            <ContentSection nameSection="Action" tabContent={contentAction} />
            <ContentSection
                nameSection="Science-Fiction"
                tabContent={contentScienceFiction}
            />
            <ContentSection nameSection="Thriller" tabContent={contentThriller} />
            <ContentSection
                nameSection="Fantastique"
                tabContent={contentFantastique}
            />
            <ContentSection nameSection="Drame" tabContent={contentDrame} />
        </div>
    </>
    
    
  );
}

export default App;

