const baseUrl = 'https://swapi.dev/api/'

export function getAllStartships() {
  return fetch(`${baseUrl}/api/classes`)
  .then(res => res.json())
}