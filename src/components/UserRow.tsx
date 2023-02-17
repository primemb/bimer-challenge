import { LoadingButton } from "@mui/lab"
import { Avatar } from "@mui/material"
import Button from "@mui/material/Button/Button"
import TableCell from "@mui/material/TableCell/TableCell"
import TableRow from "@mui/material/TableRow/TableRow"
import { Box } from "@mui/system"
import { useDeleteUserMutation } from "../services/queryUsers"

import { User } from "../types/types"

interface IUserRowProps {
  user: User
  onDelete: (id: number) => void
  onEdit: (id: number) => void
}

const UserRow = ({ user, onDelete, onEdit }: IUserRowProps) => {
  const [deleteUser, result] = useDeleteUserMutation()

  const deleteHandler = (id: number) => {
    deleteUser(id)
    onDelete(id)
  }
  return (
    <TableRow>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Avatar
            alt={`${user.first_name} ${user.last_name}`}
            src={user.avatar}
          />
          {user.email}
        </Box>
      </TableCell>
      <TableCell align="right">{user.first_name}</TableCell>
      <TableCell align="right">{user.last_name}</TableCell>
      <TableCell align="right">
        <LoadingButton
          loading={result.isLoading}
          onClick={() => deleteHandler(user.id)}
        >
          Delete
        </LoadingButton>
        <Button onClick={() => onEdit(user.id)}>Edit</Button>
      </TableCell>
    </TableRow>
  )
}

export default UserRow
