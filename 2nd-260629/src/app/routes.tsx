import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import BoardWrite from "./pages/BoardWrite";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Guide Pages
import GuideLayout from "./pages/guide/GuideLayout";
import TypographyGuide from "./pages/guide/TypographyGuide";
import ColorsGuide from "./pages/guide/ColorsGuide";
import ButtonGuide from "./pages/guide/ButtonGuide";
import InputGuide from "./pages/guide/InputGuide";
import BadgeGuide from "./pages/guide/BadgeGuide";
import CardGuide from "./pages/guide/CardGuide";
import HeroGuide from "./pages/guide/HeroGuide";
import SectionGuide from "./pages/guide/SectionGuide";
import BoardGuide from "./pages/guide/BoardGuide";
import ModalGuide from "./pages/guide/ModalGuide";
import ComponentDetailGuide from "./pages/guide/ComponentDetailGuide";

export const router = createBrowserRouter([
  {
    path: "/guide",
    Component: GuideLayout,
    children: [
      { index: true, element: <Navigate to="/guide/typography" replace /> },
      { path: "typography", Component: TypographyGuide },
      { path: "colors", Component: ColorsGuide },
      { path: "button", Component: ButtonGuide },
      { path: "input", Component: InputGuide },
      { path: "badge", Component: BadgeGuide },
      { path: "card", Component: CardGuide },
      { path: "modal", Component: ModalGuide },
      { path: "hero", Component: HeroGuide },
      { path: "section", Component: SectionGuide },
      { path: "board", Component: BoardGuide },
      { path: ":componentName", Component: ComponentDetailGuide },
    ]
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "board", Component: BoardList },
      { path: "board/:id", Component: BoardDetail },
      { path: "board/write", Component: BoardWrite },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
    ],
  },
]);
