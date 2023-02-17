import axios from "axios"

interface ILoginRequestPayload {
  token?: string
  isError?: string
}

export const loginRequest = async (
  username: string,
  password: string,
): Promise<ILoginRequestPayload> => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email: username,
      password,
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return {
          isError: error.response.data.error,
        }
      }
    }
    return {
      isError: "Something went wrong",
    }
  }
}
