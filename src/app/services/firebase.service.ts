import { AngularFirestore } from '@angular/fire/firestore';

export class FirebaseService {

    constructor(private db: AngularFirestore) {}

    saveAssociatedLeads(lead: any) {
        // This will save a single contact object. Need to iterate over multiple contacts and submit for each.
        return this.db.collection('associatedLeads').add(lead)
        .then((results) => {
            return true;
        })
        .catch((err) => {
            console.dir(err);
        })
    }

}