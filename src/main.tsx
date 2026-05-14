import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SelectionProvider } from "./app/providers/SelectionProviders.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SelectionProvider>
      <RouterProvider router={router} />
    </SelectionProvider>
  </StrictMode>,
);
