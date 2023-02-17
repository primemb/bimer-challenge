import React from "react"
import { TextField, Box } from "@mui/material"
import { styled } from "@mui/material/styles"

interface IInputFieldProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  type: "text" | "password"
}

const LoginInnerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",

  [theme.breakpoints.up("xl")]: {
    width: "60%",
  },
}))

const InputField = ({
  label,
  onChange,
  type,
  name,
  value,
}: IInputFieldProps) => {
  return (
    <LoginInnerContainer>
      <Box
        sx={{
          my: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          width: "100%",
        }}
      >
        <TextField
          id={name}
          name={name}
          label={label}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          variant="outlined"
          sx={{
            flexGrow: 1,
          }}
          type={type}
        />
      </Box>
    </LoginInnerContainer>
  )
}

export default InputField
