import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DashboardColumn, DashboardContent, DashboardHeader } from "./dashboardStyles";


export const DashboardSkeleton = () => {
  return (
    <DashboardContent className="container">
      <Skeleton height={600} width={200} />

      <DashboardColumn>
        <Skeleton height={20} width="100%" style={{ marginBottom: 15 }} />

        <DashboardHeader>
          <Skeleton width={200} height={150} />
          <Skeleton width={200} height={150} />
          <Skeleton width={200} height={150} />
        </DashboardHeader>

        <Skeleton width='100%' height={395} />
      </DashboardColumn>
    </DashboardContent >
  );
};
