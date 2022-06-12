const timedConditionalCallback = (condition, callback) => {
  if (condition) {
    callback(true)
    setTimeout(() => {
      callback(false)
    }, 5000)
    return true
  }
  return false
}

export default timedConditionalCallback
