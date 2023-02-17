import { Box, styled, Typography, Pagination } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress/CircularProgress"
import React, { useState } from "react"
import EditUserModal from "../components/EditUserModal"
import TableUsers from "../components/TableUsers"
import { useGetUsersQuery } from "../services/queryUsers"
import { User } from "../types/types"

const UserContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
})

const Users = () => {
  const [modal, setModal] = useState(false)
  const [userForEdit, setUserForEdit] = useState<User | undefined>(undefined)
  const [page, setPage] = useState(1)
  const { isError, data } = useGetUsersQuery(page)

  let content = <CircularProgress />

  if (isError) {
    content = (
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Some thing went wrong!
      </Typography>
    )
  }

  const editHandler = (id: number) => {
    setUserForEdit(data?.data.find((user) => user.id === id))
    setModal(true)
  }

  if (data) {
    content = (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "2rem",
        }}
      >
        <TableUsers onUserEdit={editHandler} users={data.data} />
        <Pagination
          page={page}
          count={data.total_pages}
          onChange={(_, value) => {
            setPage(value)
          }}
          showFirstButton
          showLastButton
        />
      </Box>
    )
  }

  return (
    <UserContainer>
      {content}
      <EditUserModal
        selectedUser={userForEdit as User}
        isOpen={modal}
        onColse={() => setModal(false)}
      />
    </UserContainer>
  )
}

export default Users
