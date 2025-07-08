import Section from "@/components/layout/Section/Section"
import { CategoryType } from "@/types/CategoryType"
import Image from "next/image"
import { CategoryCard, CategoryCardBody, CategoryCardFooter, CategoryCardHeader, CategoryContainer, CategoryContent } from "./CategoryStyles"

interface CategoryProps {
  $bgColor: 'light' | 'dark'
  categories: CategoryType[]
  id?: string
  title: string
}

export const Category = ({ $bgColor, categories, title }: CategoryProps) => {
  return (
    <CategoryContainer>
      <Section $bgColor={$bgColor} href="/#" title={title}>
        <CategoryContent >
          {categories.slice(0, 6).map((category) => (
            <CategoryCard $bgColor={$bgColor} key={category.id}>
              <CategoryCardHeader>
                <Image src={category.imageUrl} alt={category.name} width={120} height={80} />
              </CategoryCardHeader>
              <CategoryCardBody>
                <h4>{category.name}</h4>
                <p>{category.description.length > 70 ? `${category.description.substring(0, 70)}...` : category.description}</p>
              </CategoryCardBody>
              <CategoryCardFooter>
                <p>{category.gamesCount} jogos</p>
              </CategoryCardFooter>
            </CategoryCard>
          ))}
        </CategoryContent>
      </Section>
    </CategoryContainer>
  );
};

