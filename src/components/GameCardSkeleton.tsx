import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameCardSkeleton = () => {
  return (
    <Card width="100%" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
