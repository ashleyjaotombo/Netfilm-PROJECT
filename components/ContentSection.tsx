import type { MovieType } from "../typescript/Movie";
import ContentScreen from "./ContentScreen";

type ContentSectionProps = {
  nameSection: string;
  tabContent: MovieType[];
};

function ContentSection({ nameSection, tabContent }: ContentSectionProps) {
  return (
    <section className="mt-8 h-[480px]">
      <h2 className="mb-2 ml-14 text-2xl font-bold text-white">
        {nameSection}
      </h2>
      <div className="px-14 flex h-[440px] relative gap-3 overflow-y-hidden overflow-x-scroll whitespace-nowrap">
        {tabContent?.map((article) => (
          <ContentScreen key={article.id} Content={article} />
        ))}
      </div>
    </section>
  );
}

export default ContentSection;
