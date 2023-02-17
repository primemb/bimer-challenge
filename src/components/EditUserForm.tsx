import { useState } from "react"
import { Box, Button } from "@mui/material"
import InputField from "./InputField"
import { User } from "../types/types"
import { LoadingButton } from "@mui/lab"

interface IEditUserFormProps {
  user: User
  onEdit: (data: { email: string; firstName: string; lastName: string }) => void
  onClose: () => void
}

const EditUserForm = ({ user, onClose, onEdit }: IEditUserFormProps) => {
  const [email, setEmail] = useState(user.email)
  const [firstName, setFirstName] = useState(user.first_name)
  const [lastName, setLastName] = useState(user.last_name)

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <InputField
        label="Email"
        name="email"
        type="text"
        value={email}
        onChange={(value) => setEmail(value)}
      />
      <InputField
        label="First Name"
        name="first_name"
        type="text"
        value={firstName}
        onChange={(value) => setFirstName(value)}
      />
      <InputField
        label="Last Name"
        name="last_name"
        type="text"
        value={lastName}
        onChange={(value) => setLastName(value)}
      />
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <LoadingButton
          onClick={() => onEdit({ email, firstName, lastName })}
          variant="contained"
          color="success"
        >
          Save
        </LoadingButton>
        <Button onClick={() => onClose()}>Close</Button>
      </Box>
    </Box>
  )
}

export default EditUserForm
