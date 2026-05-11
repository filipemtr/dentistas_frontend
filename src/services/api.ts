const API_URL = "https://dentistas.onrender.com"

export async function registerUser(data: any) {

  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
  })

  return response.json()
}

export async function loginUser(data: any) {

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
  })

  return response.json()
}