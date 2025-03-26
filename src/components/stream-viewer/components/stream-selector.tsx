"use client";

import { Play, Clock, User } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import type { StreamType } from "../stream.type";

type StreamSelectorProps = {
  selectedStream: StreamType | undefined;
  streams: StreamType[];
  onChange: (stream: StreamType) => void;
};

function StreamSelector({
  selectedStream,
  streams,
  onChange,
}: StreamSelectorProps) {
  return streams.map((stream) => (
    <Card
      key={stream.id}
      className={`cursor-pointer transition-colors ${selectedStream?.id === stream.id ? "border-primary" : ""}`}
      onClick={() => onChange(stream)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-16 flex-shrink-0">
            <img
              src={stream.thumbnail || "/placeholder.svg"}
              alt={stream.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
              {stream.duration}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm line-clamp-1">{stream.title}</h3>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <User className="w-3 h-3 mr-1" />
              <span className="mr-2">{stream.author}</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {stream.duration}
              </span>
            </div>
            <div className="text-xs text-muted-foreground mt-1 flex items-center">
              <span className="flex items-center">
                <Play className="w-3 h-3 mr-1 fill-current" />
                {stream.viewers.toLocaleString()} viewers
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ));
}

export { StreamSelector };
