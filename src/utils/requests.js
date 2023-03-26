export const requestAttempt = async (route, formData) => {
  try {
    const data = await fetch(import.meta.env.VITE_VUE_APP_API_BASE_URL + route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => data)

    return data
  } catch (error) {
    return 'Aconteceu algo de errado ao fazer a requisição.'
  }
}
