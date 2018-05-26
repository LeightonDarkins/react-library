const classListAsArray = (element) => {
  const classList = element.classList

  const test = Object.keys(classList).map(key => {
    return classList[key]
  })

  return test
}

module.exports = {
  classListAsArray
}