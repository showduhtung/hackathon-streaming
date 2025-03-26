import { StreamType } from "./stream.type";

async function fetchStreams(): Promise<StreamType[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockStreams), 1000);
  });
}

export { fetchStreams };

const mockStreams = [
  {
    id: "1",
    title: "Live Coding Session",
    url: "https://example.com/stream1",
    thumbnail: "/placeholder.svg?height=180&width=320",
    viewers: 1245,
    duration: "1:30:00",
    author: "CodeMaster",
    description: "Building a full-stack application with React and Node.js",
  },
  {
    id: "2",
    title: "Gaming Stream - Fortnite Tournament",
    url: "https://example.com/stream2",
    thumbnail: "/placeholder.svg?height=180&width=320",
    viewers: 5678,
    duration: "2:45:00",
    author: "GamerPro",
    description: "Competing in the weekly Fortnite tournament",
  },
  {
    id: "3",
    title: "Music Production Live",
    url: "https://example.com/stream3",
    thumbnail: "/placeholder.svg?height=180&width=320",
    viewers: 892,
    duration: "1:15:00",
    author: "BeatMaker",
    description: "Creating beats and mixing tracks live",
  },
  {
    id: "4",
    title: "Tech Talk: AI and Machine Learning",
    url: "https://example.com/stream4",
    thumbnail: "/placeholder.svg?height=180&width=320",
    viewers: 3421,
    duration: "0:45:00",
    author: "TechGuru",
    description: "Discussing the latest advancements in AI technology",
  },
  {
    id: "5",
    title: "Art Creation Stream",
    url: "https://example.com/stream5",
    thumbnail: "/placeholder.svg?height=180&width=320",
    viewers: 567,
    duration: "3:00:00",
    author: "ArtistPro",
    description: "Digital painting and illustration techniques",
  },
];
