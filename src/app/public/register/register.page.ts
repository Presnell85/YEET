import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  username: string = ""
  password: string = ""
  cpassword: string = ""



  ngOnInit() {
  }

  async register(){
    //verify that passwords match
    const {username, password, cpassword} = this
    if(password !== cpassword) {
      return console.error("yo, your shit don't match")
    }


    try {
      //use firebase to create username and password
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password)
    console.log(res)
  }catch(error) {
    console.dir(error);
    
  }
}
}
