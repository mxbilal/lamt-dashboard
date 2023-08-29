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
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async onError(ex) {
    console.log("onError", ex?.config?.url, { ex })
    return ex
  },
  onSuccess(response) {
    return response
  },
  endpoints: {
    superAdmin: {
      login(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/superAdmin/login`,
          data
        })
      },
      forgetPassword(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/password/email`,
          data
        })
      },
      resetPassword(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/password/reset`,
          data
        })
      },
      twoFactor(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/verify2FA`,
          data
        })
      }
    },
    clientAdmin: {
      login(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/client/login`,
          data
        })
      },
      withGoogle(data) {
        const formData = new FormData()
        formData.append("email", data.email)
        formData.append("password", data.email)
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: '/login/google',
          data: formData,
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
      },
      register(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: '/client/register',
          data
        })
      },
      plans: {
        getPlans() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: '/plans'
          })
        }
      }
    },
  }
}