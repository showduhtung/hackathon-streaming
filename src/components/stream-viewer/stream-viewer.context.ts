"use client";

import { createSafeContext } from "~/hooks/create-safe-context";
import type { StreamType } from "./stream.type";

type StreamState = {
  selectedStream: StreamType;
};

export const [StreamsProvider, useStreamSelector] =
  createSafeContext<StreamState>(
    "StreamSelector must be used within a StreamSelectorProvider",
  );
