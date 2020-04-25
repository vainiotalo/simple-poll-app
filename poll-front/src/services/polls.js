import axios from 'axios'
const baseUrl = '/api/polls'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (newValue, id) => {
  return axios.put(`${baseUrl}/${id}`, newValue)
}

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, remove }