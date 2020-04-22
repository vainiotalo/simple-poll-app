import axios from 'axios'

const getAll = () => {
  return axios.get('http://localhost:3001/polls')
}

const create = newObject => {
  return axios.post('http://localhost:3001/polls/', newObject)
}

const remove = id => {
  return axios.delete(`http://localhost:3001/polls/${id}`)
}

export default { getAll, create, remove }