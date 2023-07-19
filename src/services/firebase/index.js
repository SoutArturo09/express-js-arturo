const { initializeApp, cert} = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/firebase-admin.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: " https://arturo-firebase.firebaseio.com "
});


module.exports =app;

//Inicilizar servicios de firebase en modo admin

