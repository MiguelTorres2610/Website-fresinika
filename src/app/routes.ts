import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { Home } from "@/app/pages/Home";
import { Menu } from "@/app/pages/Menu";
import { ProductDetail } from "@/app/pages/ProductDetail";
import { Location } from "@/app/pages/Location";
import { Reviews } from "@/app/pages/Reviews";
import { About } from "@/app/pages/About";
import { NotFound } from "@/app/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "producto/:id", Component: ProductDetail },
      { path: "ubicacion", Component: Location },
      { path: "opiniones", Component: Reviews },
      { path: "nosotros", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
