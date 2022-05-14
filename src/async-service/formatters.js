function formatApiOperation(options, provider) {
  let method = 'get'
  let url = ''

  if (typeof options === 'string') {
    url = options
  } else if (options.length > 0) {
    method = options[0]
    url = options[1]
  } else {
    method = options.method
    url = options.url
  }

  let finalOptions = {
    url: provider.baseUrl + url,
    headers: provider.commonHeaders,
    method,
  }

  return finalOptions
}

export { formatApiOperation }