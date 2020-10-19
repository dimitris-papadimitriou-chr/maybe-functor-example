import { log } from "./log";
import { Client } from "./Client.js";
import { ClientRepository } from "./ClientRepository.js";

ClientRepository.getById(2) //returns a Maybe<Client>
  .map(Client.name) //Maybe<String>
  .match({
    //String
    some: name => log(`client name:${name}`),
    none: () => log(`no client found`)
  });
