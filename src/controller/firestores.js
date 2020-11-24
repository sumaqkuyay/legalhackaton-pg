import firebase from './firebaseConfig';

// ejemplos de uso
// COLECCION EN FIRESTORE - ADD ORDER
const collectionClients = () => firebase.firestore().collection('Clients');
const collectionProducts = () => firebase.firestore().collection('Products');
const collectionOrders = () => firebase.firestore().collection('Orders');

// AGREGAR DOCS A LA COLECCION
export const addClient = (client) => {
  console.log(client);
  collectionClients().add(client)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const addOrder = (client) => {
  console.log(client);
  collectionOrders().add(client)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const addProducts = (product) => {
  collectionProducts().add(product)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// LEER LOS DOCS DE LA COLECCION
export const getProducts = () => new Promise((resolve, reject) => {
  collectionProducts().onSnapshot((query) => {
    const docs = [];
    query.forEach((product) => {
      docs.push({ ...product.data(), id: product.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});

export default {
  addClient,
  addProducts,
  getProducts,
  addOrder,
};
