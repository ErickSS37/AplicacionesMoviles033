import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(
    private authService:AuthService,
  ) {}

  ngOnInit() {
    this.correo = "",
    this.contra = ""
  }
  
  correoD = document.getElementById("correo") as HTMLInputElement;
  correo:string = this.correoD.value;
  contraD = document.getElementById("contra") as HTMLInputElement;
  contra:string = this.contraD.value;

  login(){
    this.authService.login(this.correo, this.contra)();
  };

}
