import React from "react"
import Modal from "@mui/material/Modal"
import { Box, Typography } from "@mui/material"
import { User } from "../types/types"
import EditUserForm from "./EditUserForm"
interface IEditUserModalProps {
  isOpen: boolean
  selectedUser: User | undefined
  onColse: () => void
}
const EditUserModal = ({
  isOpen,
  onColse,
  selectedUser,
}: IEditUserModalProps) => {
  const editUserHandler = (data: {
    email: string
    firstName: string
    lastName: string
  }) => {
    //TODO : there is no api to update users :(
    onColse()
  }

  return (
    <Modal open={isOpen}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            width: { lg: "80%", xl: "60%" },
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box
            id="this-is-good"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#2f2f2f" : "white",
              padding: "2rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h4">Edit user</Typography>
            {selectedUser && (
              <EditUserForm
                onEdit={editUserHandler}
                user={selectedUser}
                onClose={onColse}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default EditUserModal
