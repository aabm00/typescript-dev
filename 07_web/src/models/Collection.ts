import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing"; // Class

/**
 * T: Instancia de clase que representa un modelo (User, Car, etc)
 * K: Propiedades (userProps) de un modelo (User, Car, etc)
 */
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  // Delega la gestion de eventos a la instancia de Eventing
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger("change");
    });
  }
}
