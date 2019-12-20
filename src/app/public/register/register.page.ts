import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, database } from 'firebase/app';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private contacts: Contacts, private fStore: AngularFirestoreDocument) { }

  username: string = ""
  password: string = ""
  cpassword: string = ""



  ngOnInit() {
  }

  async register() {

    // on the login() we are invoking the cordova native contact managmenet plugin
    //let contact: Contact = this.contacts.create();

    //contact.name = new ContactName(null, '', '');
   // contact.phoneNumbers = [new ContactField('mobile', '')];
    // we need to figure out where we want to save these contacts
    // we can only test this nativly

   // contact.save() {
    //  firebase.database().ref(associatedLead).set({
       //   contact: document.getElementById(contact.name).nodeValue,
        //  contactPhoneNumber: document.getElementById(contact.phoneNumbers).nodeValue
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
