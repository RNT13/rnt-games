import Skeleton from "react-loading-skeleton";
import { ButtonDiv, HeroContainer, HeroImageContent, InfoDiv, TagDiv } from "./HeroStyles";


export const HeroSkeleton = () => {
  return (
    <HeroContainer >
      <HeroImageContent className="container">
        <TagDiv>
          <Skeleton width={60} height={30} />
          <Skeleton width={60} height={30} />
          <Skeleton width={60} height={30} />
        </TagDiv>
        <InfoDiv>
          <Skeleton width={150} height={30} />
          <Skeleton count={5} width={300} height={20} />
          <Skeleton width={120} height={20} />
          <Skeleton width={220} height={30} />
        </InfoDiv>
        <ButtonDiv>
          <Skeleton width={120} height={40} />
          <Skeleton width={220} height={40} />
        </ButtonDiv>
      </HeroImageContent>
    </HeroContainer >
  )
}
