import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DashboardColumn, DashboardContainer, DashboardContent, SkeletonBody, SkeletonHeader, SkeletonRightBar } from "./dashboardStyles";


export const DashboardSkeleton = () => {
  return (
    <DashboardContainer className="container">

      <DashboardContent>
        <SkeletonRightBar>
          <Skeleton height="100%" width="100%" />
        </SkeletonRightBar>

        <DashboardColumn>
          <Skeleton height={30} width="50%" />

          <SkeletonHeader >
            <Skeleton height="100%" width="100%" />
            <Skeleton height="100%" width="100%" />
            <Skeleton height="100%" width="100%" />
          </SkeletonHeader>

          <SkeletonBody>
            <Skeleton height="100%" width="100%" />
          </SkeletonBody>

        </DashboardColumn>

      </DashboardContent>

    </DashboardContainer>
  );
};
