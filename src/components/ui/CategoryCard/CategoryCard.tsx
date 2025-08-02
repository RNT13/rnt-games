import Image from "next/image";
import { CategoryCardBody, CategoryCardContainer, CategoryCardContent, CategoryCardFooter, CategoryCardHeader } from "./CategoryCardStyles";

interface CategoryCardProps extends CategoryType {
  $bgColor: 'light' | 'dark';
  href: string;
  title: string;
}

export const CategoryCard = ({ $bgColor, image, gamesCount, name, id, href, title }: CategoryCardProps) => {
  return (
    <CategoryCardContainer href={href} title={title} id={id}>
      <CategoryCardContent $bgColor={$bgColor} key={id}>
        <CategoryCardHeader>
          <Image src={image} alt={name} width={100} height={100} priority />
        </CategoryCardHeader>
        <CategoryCardBody>
          <h4>{name}</h4>
        </CategoryCardBody>
        <CategoryCardFooter>
          <p>{gamesCount} jogo{gamesCount > 1 && "s"}</p>
        </CategoryCardFooter>
      </CategoryCardContent>
    </CategoryCardContainer>
  );
};
