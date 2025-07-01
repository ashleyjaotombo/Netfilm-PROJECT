import type { MovieType } from "../typescript/Movie";
import ScreenFromList from "./ScreenFromList";
import { useListContext } from "../context/ListContext";

type ContentSectionProps = {
  nameSection: string;
  tabContent: MovieType[];
};


function ContentSection({ nameSection }: ContentSectionProps) {
    const ListContext=useListContext();
    
  return (
    <section className="mt-8 h-[480px]">
      <h2 className="mb-2 ml-14 text-2xl font-bold text-white">
        {nameSection}
      </h2>
      <div className="px-14 flex h-[440px] relative gap-3 overflow-y-hidden overflow-x-scroll whitespace-nowrap">
        {ListContext.tabList?.map((movie) => (
          <ScreenFromList key={movie.id} Content={movie} />
        ))}
      </div>
    </section>
  );
}

export default ContentSection;
