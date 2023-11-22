import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../shared/user.interface';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(
    private authSvc: AuthService,
    private afAuth:AngularFireAuth,  
    private router: Router
  ) {}

  ngOnInit() {
  }

  

  async sendVerE(): Promise<void> {
    return this.authSvc.sendVerificationEmail()
    .then(() => {
      this.router.navigate(['verify-email']);
    })
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }

}
