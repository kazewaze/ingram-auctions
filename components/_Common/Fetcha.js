async function Fetcha(url, method, data) {
  // Switch to process.env.API_BASE_ROUTE in production.
  url = process.env.API_BASE_ROUTE + url

  const res = await fetch(
    url,
    {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: method ? method : 'POST'
    }
  )

  const result = await res
  return result
}

export default Fetcha;