import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUsersRequestPayload, IUserUpdatePayload } from "../types/types"
const api = createApi({
  reducerPath: "apis",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUsersRequestPayload, number>({
      query: (page) => `users?page=${page}`,
    }),
    deleteUser: builder.mutation<IUserUpdatePayload, number>({
      query: (id) => ({ url: `users/${id}`, method: "DELETE" }),
    }),
  }),
})
export const { useGetUsersQuery, useDeleteUserMutation } = api

export default api
