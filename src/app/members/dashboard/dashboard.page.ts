import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }
  // login creditials
  username: string = ""
  password: string = ""

  ngOnInit() {
  }

  // firebase initialization for email login
  // Jon checkout this try catch and let me know if it looks stupid
  async login() {

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
