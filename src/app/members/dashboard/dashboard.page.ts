import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }
  // login creditials
  username: string = ""
  password: string = ""

  ngOnInit() {
  }

  // firebase initialization for email login
  // Jon checkout this try catch and let me know if it looks stupid
  async login() {

    const { username, password } = this
    try {
      // this is a terrible hack but for some reason adding a default gmail works?????
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
    } catch (err) {
      console.dir(err)
    }
  }

}
