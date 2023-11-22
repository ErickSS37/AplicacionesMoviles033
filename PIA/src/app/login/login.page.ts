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
  constructor(
    public authSvc: AuthService, 
    private router: Router) {}

  ngOnInit(): void {
    
  }

  onLogin(email:any, password:any) {
    this.authSvc
    .login(email.value, password.value)
    .then((): any => {
      if (this.authSvc.isEmailVerified) {
        this.router.navigate(['admin']);
      } else {
        window.alert('Email is not verified');
        return false;
      }
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }
  
  
  private redirectUser(isVerified:boolean):void{
    if(isVerified){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['verify-email']);
    }
  }
}
