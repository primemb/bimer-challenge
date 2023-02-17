import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { useState } from "react"
import Paper from "@mui/material/Paper"

import { User } from "../types/types"
import UserRow from "./UserRow"

interface ITableUsersProps {
  users: User[]
  onUserEdit: (id: number) => void
}

const TableUsers = ({ users, onUserEdit }: ITableUsersProps) => {
  const [deletedIds, setDeletedIds] = useState(new Set())

  const deleteHandler = (id: number) => {
    const newIdList = new Set(deletedIds).add(id)
    setDeletedIds(newIdList)
  }

  const getFilterUsers = () => {
    return users.filter((user) => !deletedIds.has(user.id))
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getFilterUsers().map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onDelete={deleteHandler}
              onEdit={onUserEdit}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableUsers
