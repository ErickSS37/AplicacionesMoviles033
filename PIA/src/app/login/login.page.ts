import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit(): void {
    const auth = this.authSvc.afAuth.currentUser;
    if(auth != null){
      this.redirectUser();
      alert("Ya hay una sesión");
    }
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      
      if (user) {;
        this.redirectUser();
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(): void {
    this.router.navigate(['home']);
    
  }
}
