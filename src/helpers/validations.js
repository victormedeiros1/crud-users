import { messages } from './messages'

export const formDataValidate = (formData) => {
  for (const key of validations.extractAllKeys(formData)) {
    if (validations[key]) {
      if (key !== 'confirmPassword') {
        if (!validations[key](formData[key])) {
          return { isValid: false, message: messages[key] }
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          return { isValid: false, message: messages[key] }
        }
      }
    }
  }
  return { isValid: true, message: messages.success }
}

export const validations = {
  extractAllKeys: (object) => {
    let keys = Object.keys(object)

    for (const key of keys) {
      if (typeof object[key] === 'object') {
        keys.push(...Object.keys(object[key]))
        keys.splice(keys.indexOf(key), 1)
      }
    }

    return keys
  },
  clearData: (data) => {
    return data.replace(/[.-]/g, '')
  },
  cpf: (cpf) => {
    // Remove caracteres indesejados do CPF (pontos, traços, etc.)
    cpf = cpf.replace(/[^\d]+/g, '')

    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false
    }

    // Verifica se todos os dígitos são iguais (ex.: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
      return false
    }

    // Calcula os dígitos verificadores
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let rest = sum % 11
    let digit1 = rest < 2 ? 0 : 11 - rest

    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i)
    }
    rest = sum % 11
    let digit2 = rest < 2 ? 0 : 11 - rest

    // Verifica se os dígitos verificadores estão corretos
    if (digit1 !== parseInt(cpf.charAt(9)) || digit2 !== parseInt(cpf.charAt(10))) {
      return false
    }

    // CPF válido
    return true
  },
  email: (email) => {
    const regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regularExpression.test(email)
  },
  pis: (pis) => {
    pis = pis.replace(/[^\d]+/g, '') // remove traços e pontos
    if (pis.length !== 11) return false // verifica se tem 11 dígitos
    var soma = 0
    var resto
    for (var i = 0; i < 10; i++) {
      soma += parseInt(pis.charAt(i)) * (10 - i)
    }
    resto = 11 - (soma % 11)
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(pis.charAt(10))) return false
    return true
  },
  password: (password) => {
    const passwordSplitted = password.split('')
    let haveCharactereUpperCase = false
    let haveNumber = false

    // Verifica se a senha possui ao menos 6 dígitos
    if (password.length < 6) {
      return false
    }

    // Verifica se é uma letra e maiúscula
    for (const char of passwordSplitted) {
      if (char === char.toUpperCase() && /[a-zA-Z]/.test(char)) {
        haveCharactereUpperCase = true
      }
    }
    if (!haveCharactereUpperCase) {
      return false
    }

    // Verifica se há números na senha
    for (const char of passwordSplitted) {
      if (Number(char)) {
        haveNumber = true
      }
    }
    if (!haveNumber) {
      return false
    }

    return true
  },
  confirmPassword: (password, confirmPassword) => {
    if (password === confirmPassword) {
      return true
    } else {
      return false
    }
  }
}
