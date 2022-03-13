const ServiceAccount = require('./ServiceAccountKey.json');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const app=initializeApp({
    credential: cert(ServiceAccount)
})

const db=getFirestore(app);

exports.db=db;