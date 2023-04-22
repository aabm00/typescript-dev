import { Model } from "./Model"; // Class
import { Attributes } from "./Attributes"; // Class
import { ApiSync } from "./ApiSync"; // Class
import { Eventing } from "./Eventing"; // Class
import { Collection } from "./Collection"; // Class

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

/**
 * No necesitamos constructor porque no estamos añadiendo ninguna
 * propiedad nueva aparte de las ya heredadas de 'Model' por lo tanto
 * llama automaticamente al constructor del padre cuando creamos un
 * nuevo 'User' con el metodo estatico 'buildUser'
 */
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
