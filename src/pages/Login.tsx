import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"

import InputField from "../components/InputField"
import { useState } from "react"
import { LoadingButton } from "@mui/lab"
import KeyIcon from "@mui/icons-material/Key"
import { loginRequest } from "../services/loginRequest"
import { useAppDispatch } from "../store/hooks"
import { login } from "../store/authSlice"

const LoginPageContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
})

const LoginFormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.divider,

  padding: "2rem",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("md")]: {
    minWidth: "50%",
  },
}))

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = async () => {
    if (!username || !password) {
      setError("Please enter username and password")
      return
    }
    setLoading(true)
    const result = await loginRequest(username, password)
    setLoading(false)
    if (result.isError) {
      setError(result.isError)
      return
    }
    dispatch(login({ token: result.token as string, email: username }))
    navigate("/users")
  }

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <Typography variant="h3" component="h2" sx={{ textAlign: "center" }}>
          Login
        </Typography>
        <InputField
          label="User Name"
          name="username"
          value={username}
          onChange={(value) => setUsername(value)}
          type="text"
        />
        <InputField
          label="Password"
          name="password"
          value={password}
          onChange={(value) => setPassword(value)}
          type="password"
        />
        {error && (
          <Typography variant="body1" sx={{ color: "red" }}>
            {error}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            startIcon={<KeyIcon />}
            variant="contained"
            loading={loading}
            sx={{ px: 4, py: 1 }}
            type="submit"
            onClick={loginHandler}
          >
            Login
          </LoadingButton>
        </Box>
      </LoginFormContainer>
    </LoginPageContainer>
  )
}

export default Login
