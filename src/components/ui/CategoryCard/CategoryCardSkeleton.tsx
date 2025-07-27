import Skeleton from "react-loading-skeleton";
import { CategoryCardBody, CategoryCardContainer, CategoryCardFooter, CategoryCardHeader } from "./CategoryCardStyles";

export const CategoryCardSkeleton = () => {
  return (
    <CategoryCardContainer>
      <CategoryCardHeader>
        <Skeleton width='100%' height={150} />
      </CategoryCardHeader>
      <CategoryCardBody>
        <Skeleton width={80} height={20} />
      </CategoryCardBody>
      <CategoryCardFooter>
        <Skeleton width={50} height={20} />
      </CategoryCardFooter>
    </CategoryCardContainer>
  );
};
