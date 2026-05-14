import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/RootLayout";

import HomePage from "./routes/home/HomePage";
import AboutPage from "./routes/about/AboutPage";
import PetDetailPage from "./routes/petDetail/PetDetailPage";

import { petsLoader } from "./routes/home/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        id: "pets",
        loader: petsLoader,

        children: [
          {
            index: true,
            element: <HomePage />,
          },

          {
            path: "pets/:id",
            element: <PetDetailPage />,
          },
        ],
      },

      {
        path: "about",
        element: <AboutPage />,
        errorElement: <div>404</div>,
      },
    ],
  },
]);
