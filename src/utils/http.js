import axios from 'axios'

const isUsingProductionAPI = process.env.REACT_APP_SERVER_ENV === 'production'

const backendHost = isUsingProductionAPI
  ? 'https://datagateway.fractaltecnologia.com.br'
  : 'https://staging.datagateway.fractaltecnologia.com.br'

const apiVersion = 'v1'

const instance = axios.create({
  baseURL: `${backendHost}/api/${apiVersion}`
})

export default instance
