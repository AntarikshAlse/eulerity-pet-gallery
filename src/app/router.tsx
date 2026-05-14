import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/RootLayout";

import HomePage from "./routes/home/HomePage";
import AboutPage from "./routes/about/AboutPage";
import PetDetailPage from "./routes/petDetail/PetDetailPage";

import { petsLoader } from "./routes/home/loader";
import { petDetailLoader } from "./routes/petDetail/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: petsLoader,
        errorElement: <div>error</div>,
      },

      {
        path: "pets/:id",
        element: <PetDetailPage />,
        loader: petDetailLoader,
      },

      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
