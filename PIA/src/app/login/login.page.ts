import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        this.redirectUser(this.authSvc.isEmailVerified(user));
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
  
  
  private redirectUser(isVerified:boolean):void{
    if(isVerified){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['verify-email']);
    }
  }
}
