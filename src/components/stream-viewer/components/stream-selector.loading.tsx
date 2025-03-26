"use client";

import { Card, CardContent } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

function StreamSelectorSkeleton() {
  return Array(5)
    .fill(0)
    .map((_, index) => (
      <Card key={index} className="mb-4">
        <CardContent className="p-4">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
      </Card>
    ));
}

export { StreamSelectorSkeleton };
