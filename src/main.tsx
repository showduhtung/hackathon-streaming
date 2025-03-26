import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";
import { ReactQueryProvider } from "./providers/react-query-provider";
import { ThemeProvider } from "./providers/theme-provider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ThemeProvider>
        <main className="container min-h-screen bg-background text-foreground mx-auto py-4">
          <App />
        </main>
      </ThemeProvider>
    </ReactQueryProvider>
  </StrictMode>,
);
