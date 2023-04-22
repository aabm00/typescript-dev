import { Model } from "../models/Model";

interface HasId {
  id?: number;
}

/**
 * T seria por ejemplo User
 * K seria por ejemplo UserProps
 */
export abstract class View<T extends Model<K>, K extends HasId> {
  /**
   * En 'tsconfig.json' se ha añadido 'dom' para poder de los tipos como
   * 'Element'
   *
   *  "lib": [
   *    "esnext",
   *     "dom"
   *  ]
   */
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  /**
   * implementacion por defecto. Se reescribe en las
   * Clases que la extienden
   */
  regionsMap(): { [key: string]: string } {
    return {};
  }

  /**
   * implementacion por defecto. Se reescribe en las
   * Clases que la extienden
   */
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  // Cuando cambia el modelo re-rende
  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  /**
   * Inspecciona el objeto con los eventos de la vista
   *  evento:selector : callback
   * Obtiene los elementos del DocumentFragment y les aplica
   * el listener para el evento correspondiente
   *
   * @param fragment // segmento del 'document'
   */
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  /**
   * Inspecciona el objeto con las regiones de la vista
   *  viewKey : selector
   * Obtiene los elementos del DocumentFragment y lo añade
   * al objeto 'regions' para poder renderizarlos antes
   * que la vista padre
   *
   * @param fragment // segmento del 'document'
   */
  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  /**
   * implementacion por defecto. Se reescribe en las
   * Clases que la extienden
   */
  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    // Se encarga de renderizar las regiones (vistas anidadas)
    this.onRender();

    this.parent.append(templateElement.content);
  }
}
