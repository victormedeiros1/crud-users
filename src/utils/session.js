export const setSessionData = (data) => {
  const keys = Object.keys(data)
  const values = Object.values(data)

  for (let i = 0; i < keys.length; i++) {
    sessionStorage.setItem(keys[i], values[i])
  }
}

export const getSessionUserName = () => {
  return sessionStorage.name
}
export const getSessionEmail = () => {
  return sessionStorage.email
}
export const getSessionCountry = () => {
  return sessionStorage.country
}
export const getSessionState = () => {
  return sessionStorage.state
}
export const getSessionCity = () => {
  return sessionStorage.city
}
export const getSessionCep = () => {
  return sessionStorage.cep
}
export const getSessionStreet = () => {
  return sessionStorage.street
}
export const getSessionNumber = () => {
  return sessionStorage.number
}
export const getSessionComplement = () => {
  return sessionStorage.complement
}
export const getSessionCPF = () => {
  return sessionStorage.cpf
}

export const getSessionPIS = () => {
  return sessionStorage.pis
}

export const getSessionPassword = () => {
  return sessionStorage.password
}
