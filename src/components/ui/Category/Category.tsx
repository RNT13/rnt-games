
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { CategoryCardSkeleton } from "../CategoryCard/CategoryCardSkeleton";
import Section from "../Section/Section";
import { CategoryContainer, CategoryContent } from "./CategoryStyles";

interface CategoryProps {
  $bgColor: 'light' | 'dark'
  title: string
  categoryList: CategoryType[]
  isLoading?: boolean
  id: string
}

export const Category = ({ $bgColor, title, categoryList, isLoading, id }: CategoryProps) => {
  return (
    <CategoryContainer id={id}>
      <Section $bgColor={$bgColor} href="/allGames" title={title}>
        <CategoryContent>
          {isLoading ? (
            <>
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
              <CategoryCardSkeleton />
            </>
          ) : (
            categoryList.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
                gamesCount={category.gamesCount}
                $bgColor={$bgColor}
                href={`/allGames/#${category.id}`} title={`Ver todos os jogos da categoria ${category.name}`} />
            ))
          )}

        </CategoryContent>
      </Section>
    </CategoryContainer>
  );
};
