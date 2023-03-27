export const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

export const getUser = async () => {
  const userId = sessionStorage.getItem('id')

  try {
    const [data] = await fetch(import.meta.env.VITE_VUE_APP_API_BASE_URL + `/user/${userId}`)
      .then((response) => response.json())
      .then((data) => data)

    const user = { ...data }

    return user
  } catch (error) {
    return 'error'
  }
}
