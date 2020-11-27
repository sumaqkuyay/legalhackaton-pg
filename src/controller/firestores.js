import firebase from './firebaseConfig';

// COLECCION EN FIRESTORE - ADD ORDER

const collectionMaterials = () => firebase.firestore().collection('Materials');
const collectionSubMaterials = () => firebase.firestore().collection('SubMaterials');

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

// AGREGAR DOCS A LA COLECCION

export const addSubMaterials = (submaterial) => new Promise((res) => {
  collectionSubMaterials().add(submaterial)
    .then((doc) => {
      res(doc);
      console.log('Añadido con exito');
    })
    .catch((err) => {
      console.log(err);
    });
});

// LEER LOS DOCS DE LA COLECCION
export const getSubMaterials = () => new Promise((resolve) => {
  collectionSubMaterials().onSnapshot((query) => {
    const docs = [];
    query.forEach((submaterial) => {
      docs.push({ ...submaterial.data(), id: submaterial.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});
export default {
  addMaterials,
  getMaterials,
  addSubMaterials,
  getSubMaterials,
};
