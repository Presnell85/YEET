import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, database } from 'firebase/app';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, private contacts: Contacts, private firebaseService: FirebaseService) { }

  username: string = ""
  password: string = ""
  cpassword: string = ""



  ngOnInit() {
  }

  async register() {

    // on the login() we are invoking the cordova native contact managmenet plugin

    let testContact: Contact = this.contacts.create();

    testContact.name = new ContactName(null, 'Kendrick', 'Bobby');
    testContact.phoneNumbers = [new ContactField('mobile', '(573) 861-5309')];

    this.firebaseService.saveAssociatedLeads(testContact);

    this.contacts.find(
      ["displayName", "phoneNumbers"],
      {multiple: true, hasPhoneNumber: true}
      ).then((contacts) => {
        for (var i=0 ; i < contacts.length; i++){
          if(contacts[i].displayName !== null) {
            var contact = {};
            contact["name"]   = contacts[i].displayName;
            contact["number"] = contacts[i].phoneNumbers[0].value;
            this.firebaseService.saveAssociatedLeads(contact);
          }
        }
    });

    // this.contacts.find([])
    // .then(deviceContacts => {
    //   console.log('What are the device contacts?: ', deviceContacts);
    //   this.firebaseService.saveAssociatedLeads([testContact]);
    // })
    // .catch((err) => {
    //   console.error(err);
    // });

  //   let contact: Contact = this.contacts.create();

  //   contact.name = new ContactName(null, '', '');
  //  contact.phoneNumbers = [new ContactField('mobile', '')];
    // we need to figure out where we want to save these contacts
    // we can only test this nativly

  //  contact.save() {
  //    const contactDTO = {
  //      name: document.getElementById(contact.name.formatted).nodeValue,
  //      phoneNumbers: document.getElementById(contact.phoneNumbers).nodeValue;
  //    };
    //  firebase.database().ref(associatedLead).set({
    //      contact: document.getElementById(contact.name).nodeValue,
    //      contactPhoneNumber: document.getElementById(contact.phoneNumbers).nodeValue
    //  });
  //  }
    // verify that passwords match
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      return console.error('yo, your shit dont match');
    }


    try {
      // use firebase to create username and password
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password)
      console.log(res);
    } catch (error) {
      console.dir(error);
    }
  }
}
