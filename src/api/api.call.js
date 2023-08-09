import Axios from "axios";

const base_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const LAMT_API = {
  lamtApi: Axios.create({
    name: 'lamt-api'
  }),
  init() {
    this.lamtApi.interceptors.request.use(this.onRequest.bind(this))

    this.lamtApi.interceptors.response.use(this.onSuccess.bind(this), this.onError.bind(this))
  },
  onRequest(config) {
    console.log("request", config.url, config, base_URL)
    let token = localStorage.getItem("authToken")
    if (['lamt-api'].includes(config.name)) {
      config.baseURL = base_URL;
      config.headers.Authorization = `Bearer `;
    }
    return config;
  },
  async onError(ex) {
    console.log("onError", ex?.config?.url, { ex })
    return ex
  },
  onSuccess(response) {
    console.log("response", response.config.url, response)
    return response
  },
  endpoints: {
    superAdmin: {
      login(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/super-admin/login`,
          data
        })
      }
    }
  }
}