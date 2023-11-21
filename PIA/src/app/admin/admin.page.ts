import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
    const user = this.authSvc.afAuth.currentUser;
    if(!user){
      this.redirectUser();
      alert("Primero inicia sesión");
    }
  }

  
  private redirectUser(): void {
    this.router.navigate(['login']);
    
  }


}
