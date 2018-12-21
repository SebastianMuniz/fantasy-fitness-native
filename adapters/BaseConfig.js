export const BASE_URL = 'http://10.39.109.228:3000/api/v1/'

export const config = (method, body=nil) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body)
  }
}

export const configWithAuth = (token) => {
    return {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
  }
}

export const jsonify = (res) => res.json()
