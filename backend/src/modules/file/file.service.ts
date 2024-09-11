import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { adminsdk } from 'src/config/firebase.config';

@Injectable()
export class FileService {
  // eslint-disable-next-line @typescript-eslint/require-await
  async uploadFile(imageUrl) {
    const serviceAccount: ServiceAccount = require(JSON.stringify(adminsdk));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: 'gs://yugiohshop-ca5fe.appspot.com',
    });
    const storage = getStorage();
    const storageRef = ref(storage, 'card');
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    uploadBytes(storageRef, imageUrl).then(() => {
      console.log('Uploaded a blob or file!');
    });
    const db = admin.firestore();
    console.log(db);
  }
}
