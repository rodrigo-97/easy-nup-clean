import {
  ChartLine,
  Folders,
  Handshake,
  IconProps,
  Kanban,
  Pen,
  SignOut,
  UsersThree,
} from "phosphor-react";
import React from "react";

type SidenavTile = {
  icon: React.ElementType<IconProps>;
  title: string;
  route: string;
};

export const sidenavTiles: SidenavTile[] = [
  {
    icon: ChartLine,
    route: "",
    title: "Dashboard",
  },
  {
    icon: Folders,
    route: "contracts",
    title: "Contratos",
  },
  {
    icon: Kanban,
    route: "projects",
    title: "Projetos",
  },
  {
    icon: Pen,
    route: "analisys",
    title: "Análises",
  },
  {
    icon: UsersThree,
    route: "analysts",
    title: "Analistas",
  },
  {
    icon: Handshake,
    route: "clients",
    title: "Clientes",
  },
  {
    icon: SignOut,
    route: "",
    title: "Sair",
  },
];
