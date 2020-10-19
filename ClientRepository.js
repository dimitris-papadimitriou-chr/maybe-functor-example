import { Client } from "./Client.js";
import { firstOrNone } from "./utils.js";
import * as R from "ramda";

var Clients = [new Client(1, "jim"), new Client(2, "jane")];

// var ClientRepository = {
//   getById: id => firstOrNone(Clients.filter(client => client.id == id))
//   //returns a Maybe<T>
// };

// A ramda repository that everything is composed using R.comspose. Is equivalent with the one above
export let ClientRepository = {
  getById: id =>
    R.compose(
      firstOrNone,
      R.filter(R.propEq("id", id))
    )(Clients)
};
