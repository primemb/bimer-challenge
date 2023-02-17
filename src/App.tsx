import { createTheme } from "@mui/material/styles"
import { useEffect, useMemo, useState } from "react"
import { ThemeProvider } from "@mui/system"
import Router from "./router/router"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { login } from "./store/authSlice"
import Navbar from "./components/Navbar"
import { CssBaseline } from "@mui/material"

function App() {
  const [isDark, setisDark] = useState(true)
  const isLogin = useAppSelector((state) => state.auth.isLogin)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    if (token && email) {
      dispatch(login({ token, email }))
    }
  }, [dispatch])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
        },
      }),
    [isDark],
  )

  const changeDarkMode = () => {
    setisDark((state) => !state)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar isDark={isDark} onDarkChange={changeDarkMode} />
      <Router isLoggedIn={isLogin} />
    </ThemeProvider>
  )
}

export default App
