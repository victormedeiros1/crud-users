export const setSessionData = (data) => {
  const keys = Object.keys(data)
  const values = Object.values(data)

  for (let i = 0; i < keys.length; i++) {
    sessionStorage.setItem(keys[i], values[i])
  }
}

export const setSessionCookie = ({ id, name, token }) => {
  const expirationTime = new Date(Date.now() + 3600 * 1000)
  const userCookie = { id, name, token }
  const userJSON = JSON.stringify(userCookie)
  document.cookie = `crudUsersCookie=${userJSON}; expires=${expirationTime}; path=/`
}

// export const existCookie = () => {
//   const cookieArray = document.cookie.split(';')
//   const cookie = cookieArray.find((cookie) => cookie.startsWith('crudUsersCookie='))

//   if (cookie) {
//     const userData = JSON.parse(decodeURIComponent(cookie.split('=')[1]))

//     return userData
//   } else {
//     return null
//   }
// }
