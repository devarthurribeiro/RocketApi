import axios, { AxiosInstance } from "axios";

const baseUrl = 'https://rocket-api.now.sh/api/v1/'

interface InitSettings {
  uid: string,
}

class Resource {
  api:AxiosInstance;
  resource:string;

  constructor(api:AxiosInstance, resource:string) {
    this.api = api
    this.resource = resource
  }

  list() {
    return this.api.get(this.resource);
  }

  create(params:any) {
    return this.api.post(this.resource, params)
  }

  update(params:any) {
    return this.api.post(`${this.resource}/${params._id}`, params)
  }
  
  delete(id:string) {
    return this.api.post(`${this.resource}/${id}`)
  }
}


class RocketClient {
  axiosInstance:AxiosInstance;
  constructor(config:InitSettings) {
    this.axiosInstance = axios.create({
      baseURL: `${baseUrl}${config.uid}/`
    });
  }
  ref(resource:string) {
    return new Resource(this.axiosInstance, resource)
  }
}

export default RocketClient;
