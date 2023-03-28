import { messages } from '../helpers/messages'

export const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

export const getUser = async () => {
  const userId = sessionStorage.getItem('id')
  const token = sessionStorage.getItem('token')

  try {
    const [data] = await fetch(import.meta.env.VITE_VUE_APP_API_BASE_URL + `/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => data)

    const response = { ...data }

    return { user: response, message: messages.success }
  } catch (error) {
    return { message: messages.requestError }
  }
}

export const loginRequest = async (formData) => {
  try {
    const response = await fetch(import.meta.env.VITE_VUE_APP_API_BASE_URL + '/auth', {
      method: 'POST',
      headers,
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => data)

    if (response.status === 404) {
      return { message: messages.userNotExist }
    } else {
      return { user: response, message: messages.success }
    }
  } catch (error) {
    return { message: messages.requestError }
  }
}
