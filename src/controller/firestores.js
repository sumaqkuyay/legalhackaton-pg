import firebase from './firebaseConfig';

// COLECCION EN FIRESTORE - ADD ORDER

const collectionMaterials = () => firebase.firestore().collection('Materials');

// AGREGAR DOCS A LA COLECCION

export const addMaterials = (material) => new Promise((res) => {
  collectionMaterials().add(material)
    .then((doc) => {
      res(doc);
      console.log('Añadido con exito');
    })
    .catch((err) => {
      console.log(err);
    });
});

// LEER LOS DOCS DE LA COLECCION
export const getMaterials = () => new Promise((resolve) => {
  collectionMaterials().onSnapshot((query) => {
    const docs = [];
    query.forEach((material) => {
      docs.push({ ...material.data(), id: material.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});

export default {
  addMaterials,
  getMaterials,
};
