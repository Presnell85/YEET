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
