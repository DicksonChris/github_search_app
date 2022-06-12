const validateUsernameSearch = (text, setMessage) => {
  // Validate username length is less than 39 characters
  if (text.length > 39) {
    setMessage('Username too long')
    return true
  }

  // Validate username only includes alphanumeric characters and hyphens
  const pattern = /^[A-Za-z0-9-]*$/
  if (!pattern.test(text)) {
    setMessage('Invalid character in username')
    return true
  }
  return false
}

export default validateUsernameSearch
