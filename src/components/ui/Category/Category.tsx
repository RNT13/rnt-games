import { CategoryType } from "@/types/CategoryType";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import Section from "../Section/Section";
import { CategoryContainer, CategoryContent } from "./CategoryStyles";

interface CategoryProps {
  $bgColor: 'light' | 'dark'
  title: string
  categoryList: CategoryType[]
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
              image={category.image}
              gamesCount={category.gamesCount}
              $bgColor={$bgColor} />
          ))}
        </CategoryContent>
      </Section>
    </CategoryContainer>
  );
};
