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
    
  }

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        this.redirectUser(this.authSvc.isEmailVerified(user));
      }
    } catch (error) {
      console.log('Error', error);
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
