import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private authSvc: AuthService, private router: Router, private guard:AuthGuard) {}

  ngOnInit() {
    const auth = this.authSvc.afAuth.currentUser;
    if(auth){
      this.redirectUser();
      alert("Ya hay una sesión");
    }
  }

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        this.redirectUser();
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  private redirectUser(): void {
      this.router.navigate(['home']);
  }
}
