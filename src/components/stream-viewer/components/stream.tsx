"use client";

import { Play, User, Info } from "lucide-react";
import { StreamType } from "../stream.type";
import { Video } from "../../video";

function Stream({ selectedStream }: { selectedStream?: StreamType }) {
  if (!selectedStream) return StreamPlaceholder();
  return (
    <div className="space-y-4">
      <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 ">
          <Video
            options={{
              controls: true,
              autoplay: true,
              responsive: true,
              fluid: true,
              sources: [
                {
                  src: "http://localhost:9000/hackathon-stream/stream.m3u8",
                  type: "application/x-mpegURL",
                },
              ],
            }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">{selectedStream.title}</h2>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {selectedStream.author}
          </span>
          <span className="flex items-center gap-1">
            <Play className="w-4 h-4 fill-current" />
            {selectedStream.viewers.toLocaleString()} viewers
          </span>
        </div>

        <div className="mt-4 bg-muted p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 mt-0.5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Description</h3>
              <p className="text-sm mt-1">{selectedStream.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StreamPlaceholder() {
  return (
    <div className="h-full flex items-center justify-center bg-muted/50 rounded-lg p-8">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-2">No Stream Selected</h3>
        <p className="text-muted-foreground">
          Select a stream from the list to view details
        </p>
      </div>
    </div>
  );
}

export { Stream };
