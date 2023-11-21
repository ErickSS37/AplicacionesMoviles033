import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.page.html',
  styleUrls: ['./user-config.page.scss'],
})
export class UserConfigPage{

  constructor(
    private authSvc: AuthService, 
    private router: Router
  ) {}  
  

  async onResetPassword(email):Promise<void>{
    try {
      this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error->', error);
    }
  }


}
  
