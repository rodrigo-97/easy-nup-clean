import { Content } from '@/presentation/components/Content'
import { Core } from '@/presentation/components/Core'
import { Navbar } from '@/presentation/components/Navbar'
import { Button } from '@/presentation/components/shared/Button'
import { If } from '@/presentation/components/shared/If'
import { SidenavTile } from '@/presentation/components/shared/SidenavTile'
import { Sidenav } from '@/presentation/components/Sidenav'
import { dark } from '@/presentation/themes/dark'
import { light } from '@/presentation/themes/light'
import { IconContext, Moon, Sun } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { sidenavTiles } from '../constants/sidenavTiles'
import { usePersistedState } from '../hooks/usePersistedState'
import { AppRoutes } from '../routes'

type Theme = "dark" | "light"

function App() {
  const [currentTheme, setCurrentTheme] = usePersistedState<Theme>("APP_THEME", "dark")
  const navigate = useNavigate()


  function toggleTheme() {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark")
  }


  function handleNavigate(route: string) {
    navigate(route)
  }

  return (
    <div className="App">
      <IconContext.Provider
        value={{
          color: currentTheme === "dark" ? 'white' : "#344767",
          size: 20,
          weight: "bold",
          mirrored: false,
        }}
      >
        <ThemeProvider theme={currentTheme === "dark" ? dark : light}>
          <Navbar>
            <div>
              LOGO NUP
            </div>
            <div>
              <Button color='primary' onClick={toggleTheme}>
                <If
                  condition={currentTheme === "dark"}
                  then={<Moon />}
                  else={<Sun color='white' />}
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
                )
              })}
            </Sidenav>
            <Core>
              <AppRoutes />
            </Core>
          </Content>
        </ThemeProvider>
      </IconContext.Provider>
    </div>
  )
}

export default App
