import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 

  constructor(public afAuth: AngularFireAuth, private router: Router, private contacts: Contacts) { }


  // login creditials
  username: string = "";
  password: string = "";

  ngOnInit() {
  }

  // firebase initialization for email login
  // Jon checkout this try catch and let me know if it looks stupid
  async login() {

    // on the login() we are invoking the cordova native contact managmenet plugin
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, '', '');
    contact.phoneNumbers = [new ContactField('mobile', '')];
    // we need to figure out where we want to save these contacts
    // we can only test this nativly
    contact.save().then(
      () => console.log('I took your contacts!', contact),
      (error: any) => console.error('Error taking your contacts.', error)
    );

    const { username, password } = this;

    this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
      .then(response => {
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.dir(err);
      })
  }


}
