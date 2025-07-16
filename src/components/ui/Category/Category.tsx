import Section from "@/components/ui/Section/Section"
import { CategoryType } from "@/types/CategoryType"
import { CategoryCard } from "../CategoryCard/CategoryCard"
import { CategoryContainer, CategoryContent } from "./CategoryStyles"

interface CategoryProps {
  $bgColor: 'light' | 'dark'
  categories: CategoryType[]
  id?: string
  title: string
}

export const Category = ({ $bgColor, categories, title }: CategoryProps) => {
  return (
    <CategoryContainer>
      <Section $bgColor={$bgColor} href="/allGames" title={title}>
        <CategoryContent >
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} category={category} $bgColor={$bgColor} />
          ))}
        </CategoryContent>
      </Section>
    </CategoryContainer>
  );
};

