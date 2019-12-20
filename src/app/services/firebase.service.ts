import { AngularFirestore } from '@angular/fire/firestore';

export class FirebaseService {

    constructor(private db: AngularFirestore) {}

    saveAssociatedLeads(leads: any) {
        return this.db.collection('associatedContacts').add(leads).then((results) => {
            console.log('The results of submitting to firestore: ', results);
            return true;
        })
        .catch((err) => {
            console.dir(err);
        })
    }

}