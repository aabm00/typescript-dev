import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
//
import { UserProps, User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

// const users = new Collection(
//   "http://localhost:3000/users",
//   (json: UserProps) => {
//     return User.buildUser(json);
//   }
// );

// Crear la collección Users
const users = User.buildUserCollection();

// Crear un User
const user = User.buildUser({ name: "Toni", age: 18 });

// VISTA LISTA DE USUARIOS

// users.on("change", () => {
//   const root = document.getElementById("root");

//   if (root) {
//     new UserList(root, users).render();
//   }
//
// users.fetch();

// VISTA EDICION USUARIO

const root = document.getElementById("root");
if (root) {
  new UserEdit(root, user).render();
}
