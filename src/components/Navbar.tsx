import React, { useState } from "react"
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { logout } from "../store/authSlice"
import { Brightness4, Brightness7 } from "@mui/icons-material"
interface INavbarProps {
  isDark: boolean
  onDarkChange: () => void
}

const Navbar = ({ isDark, onDarkChange }: INavbarProps) => {
  const authState = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logoutHandler = () => {
    handleClose()
    dispatch(logout())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bimer
          </Typography>
          {authState.isLogin && (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Typography>{authState.email}</Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{ top: "35px" }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </>
          )}
          {isDark ? (
            <IconButton color="inherit" onClick={() => onDarkChange()}>
              <Brightness4 />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => onDarkChange()}>
              <Brightness7 />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
