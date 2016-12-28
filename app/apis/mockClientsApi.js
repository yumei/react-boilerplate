import delay from './delay';

const clients = [
  {
    id: 'John-Doe',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1986/1/1',
    enrolled: true,
    gender: 'M'
  }, {
    id: 'Lisa-Smith',
    firstName: 'Lisa',
    lastName: 'Smith',
    dateOfBirth: '1980/5/21',
    enrolled: false,
    gender: 'F'
  }, {
    id: 'Leo-Smith',
    firstName: 'Leo',
    lastName: 'Smith',
    dateOfBirth: '1992/12/5',
    enrolled: true,
    gender: 'M'
  }
];

class ClientApi {

  static getAllClients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], clients));
      }, delay);
    });
  }

  static saveClient(client) {
    client = Object.assign({}, client); //to vaoid manipulating object passed in
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        client.id = getId(client); //todo: check duplicate
        clients.push(client);
      }, delay);
    });
  }
}

export function getClients() {
  return clients;
} //todo: replaced with api call

export function addClient(client) {
  client.id = getId(client);
  clients.push(client);
}

const getId = (client) => {
  return client.firstName + '-' + client.lastName;
}

export function updateClient(client) {
  let id = getId(client);
  let existingClient = clients.find(x => x.id === id);
  if (existingClient) {
    existingClient.firstName = client.firstName;
    existingClient.lastName = client.lastName;
    existingClient.dateOfBirth = client.dateOfBirth;
    existingClient.enrolled = client.enrolled;
    existingClient.gender = client.gender;
  } else {
    clients.push(client);
  }
}

export function getClient(id) {
  return clients.find(x => x.id === id);
}
export default ClientApi;