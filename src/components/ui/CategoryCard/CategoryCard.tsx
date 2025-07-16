'use client'

import { CategoryType } from "@/types/CategoryType"
import Image from "next/image"
import { CategoryCardBody, CategoryCardContainer, CategoryCardContent, CategoryCardFooter, CategoryCardHeader } from "./CategoryCardStyles"

interface CategoryCardProps {
  category: CategoryType
  $bgColor: 'light' | 'dark'
}

export const CategoryCard = ({ category, $bgColor }: CategoryCardProps) => {
  return (
    <CategoryCardContainer>
      <CategoryCardContent $bgColor={$bgColor} key={category.id}>
        <CategoryCardHeader>
          <Image src={category.imageUrl} alt={category.name} width={100} height={100} />
        </CategoryCardHeader>
        <CategoryCardBody>
          <h4>{category.name}</h4>
          <p>{category.description.length > 70 ? `${category.description.substring(0, 70)}...` : category.description}</p>
        </CategoryCardBody>
        <CategoryCardFooter>
          <p>{category.gamesCount} jogos</p>
        </CategoryCardFooter>
      </CategoryCardContent>
    </CategoryCardContainer>
  )
}
