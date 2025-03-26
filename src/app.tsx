"use client";

import { ThemeSwitch } from "~/components/theme/theme-switch";
import { StreamViewer } from "./components/stream-viewer";

function Header() {
  return (
    <div className="flex gap-2 flex-row-reverse">
      <ThemeSwitch />
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Stream Viewer</h1>
      <StreamViewer />
    </div>
  );
}

export { App };
