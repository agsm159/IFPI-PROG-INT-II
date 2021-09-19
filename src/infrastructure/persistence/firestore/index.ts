import * as admin from 'firebase-admin';

// TODO corrigir o caminho do json the kiler
var serviceAccount = require("../../../../servicesApp-Service-admin.json")

admin.initializeApp({credential:admin.credential.cert(serviceAccount)});

export const db = admin.firestore();
