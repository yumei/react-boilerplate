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
        client.id = client.firstName + '-' + client.lastName; //todo: check duplicate
        clients.push(client);
      }, delay);
    });
  }
}

export function getClients() {
  return clients;
} //todo: replaced with api call

export function addClient(client) {
  client.id = client.firstName + '-' + client.lastName;
  clients.push(client);
}
export default ClientApi;