import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

/**
 * const rootUrl = 'http://localhost:3000/users'
 * Podriamos tener varias clases que implementen la interfaz
 * Sync. o sea los metodos fetch y save.
 */
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
