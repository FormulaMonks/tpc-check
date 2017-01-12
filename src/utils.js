/**
 * Add a script with the specified source to the body.
 */
export const addScript = src => {
  if (typeof src !== 'string') throw new Error('Please, provide URL string to addScript()')

  const el = document.createElement('script')
  el.setAttribute('src', src)
  document.body.appendChild(el)

  return el
}

/**
 * Remove a script specified by its reference.
 */
export const removeScript = el => {
  document.body.removeChild(el)
}
