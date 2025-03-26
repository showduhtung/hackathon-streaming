"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Stream, StreamSelectorSkeleton, StreamSelector } from "./components";
import { StreamType } from "./stream.type";
import { fetchStreams } from "./stream-viewer.query";

function StreamViewer() {
  const [selectedStream, setSelectedStream] = useState<
    StreamType | undefined
  >();

  const { data: streams = [], isLoading } = useQuery({
    queryKey: ["streams"],
    queryFn: fetchStreams,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Available Streams</h2>
        {isLoading ? (
          <StreamSelectorSkeleton />
        ) : (
          <StreamSelector
            streams={streams}
            selectedStream={selectedStream}
            onChange={setSelectedStream}
          />
        )}
      </div>
      <div className="md:col-span-2">
        <Stream selectedStream={selectedStream} />
      </div>
    </div>
  );
}
export { StreamViewer };
