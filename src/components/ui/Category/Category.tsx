import { CategoryCard } from "../CategoryCard/CategoryCard";
import Section from "../Section/Section";
import { CategoryContainer, CategoryContent } from "./CategoryStyles";

interface CategoryProps {
  $bgColor: 'light' | 'dark'
  categoryList: {
    id: string;
    name: string;
    imageUrl: string;
    gamesCount: number;
  }[]
  title: string
}

export const Category = ({ $bgColor, title, categoryList }: CategoryProps) => {
  return (
    <CategoryContainer>
      <Section $bgColor={$bgColor} href="/allGames" title={title}>
        <CategoryContent>
          {categoryList.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              gamesCount={category.gamesCount}
              $bgColor={$bgColor} />
          ))}
        </CategoryContent>
      </Section>
    </CategoryContainer>
  );
};
