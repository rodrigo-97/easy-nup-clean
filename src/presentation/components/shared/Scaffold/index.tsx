import { sidenavTiles } from "@/presentation/constants/sidenavTiles";
import { useTheme } from "@/presentation/stores/theme";
import { ArrowLeft, Moon, Sun } from "phosphor-react";
import React, { Fragment } from "react";
import { Router, useNavigate } from "react-router-dom";
import { Navbar } from "../../navbar/Navbar";
import { Sidenav } from "../../sidenav/Sidenav";
import { SidenavTile } from "../../sidenav/SidenavTile";
import { Button } from "../Button";
import { Content } from "../Content";
import { Core } from "../Core";
import { Header } from "../Header";
import { If } from "../If";

type Props = {
  title: string;
  showBackArrow?: boolean;
  body: React.ReactElement;
};

export function Scaffold({ title, showBackArrow = false, body }: Props) {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();

  function handleNavigate(route: string) {
    navigate(route);
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Fragment>
      <Navbar>
        <div>LOGO NUP</div>
        <div>
          <Button color="primary" onClick={toggleTheme}>
            <If
              condition={theme === "dark"}
              then={<Moon />}
              else={<Sun color="white" />}
            />
            Alterar tema
          </Button>
        </div>
      </Navbar>
      <Content>
        <Sidenav>
          {sidenavTiles.map((item) => {
            return (
              <SidenavTile
                key={item.title}
                onClick={() => handleNavigate(item.route)}
              >
                <item.icon />
                {item.title}
              </SidenavTile>
            );
          })}
        </Sidenav>
        <Core>
          <Header>
            <If
              condition={showBackArrow}
              then={
                <ArrowLeft
                  size={25}
                  weight="bold"
                  onClick={handleGoBack}
                  className="pointer"
                />
              }
            />
            <h2>{title}</h2>
          </Header>
          {body}
        </Core>
      </Content>
    </Fragment>
  );
}
