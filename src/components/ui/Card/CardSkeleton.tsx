import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { CardBody, CardButtonDiv, CardContainer, CardFooter, CardHeader, CardPrice } from "./CardStyles";

export const CardSkeleton = () => {
  return (
    <CardContainer>
      <CardHeader>
        <Skeleton height="100%" width="100%" />
      </CardHeader>

      <CardBody>
        <Skeleton width="80%" height={20} style={{ marginTop: 15 }} />

        <Skeleton count={3} width="100%" height={14} />
        <Skeleton width={40} height={20} />
      </CardBody>

      <CardFooter>
        <CardPrice>
          <Skeleton width={80} height={20} />
        </CardPrice>
        <CardButtonDiv>
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
        </CardButtonDiv>
      </CardFooter>
    </CardContainer>
  );
};
