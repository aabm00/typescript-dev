import { User, UserProps } from "../models/User"; // Class, Interface

import { View } from "./View"; // Abstract Class
import { UserForm } from "./UserForm"; // Class
import { UserShow } from "./UserShow"; // Class

export class UserEdit extends View<User, UserProps> {
  // Reescribe el metodo del padre
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }

  // Reescribe el metodo del padre
  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
