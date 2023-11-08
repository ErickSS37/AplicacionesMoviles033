import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  correoD = document.getElementById("correo") as HTMLInputElement;
  correo:string = this.correoD.value;
  contraD = document.getElementById("contra") as HTMLInputElement;
  contra:string = this.contraD.value;

  registro(){
    this.authService.registro(this.correo, this.contra);


  }

  ngOnInit() {
    this.correo = "",
    this.contra = ""
  }


}
