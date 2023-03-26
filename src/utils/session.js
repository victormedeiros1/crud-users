export const setSessionData = (data) => {
  const keys = Object.keys(data)
  const values = Object.values(data)

  for (let i = 0; i < keys.length; i++) {
    sessionStorage.setItem(keys[i], values[i])
  }
}
