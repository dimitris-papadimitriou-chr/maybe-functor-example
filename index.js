import { log } from "./log";
import { Client } from "./Client.js";
import { firstOrNone } from "./utils.js";

var Clients = [new Client(1, "jim"), new Client(2, "jane")];

var Repository = {
  getById: id => firstOrNone(Clients.filter(client => client.id == id)) 
  //returns a Maybe<T>
};

Repository.getById(2)    //returns a Maybe<Client>
  .map(Client.name)      //Maybe<String>
  .match({               //String 
    some: name => log(`client name:${name}`),
    none: () => log(`no client found`)
  });
