import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cambio-contra',
  templateUrl: './cambio-contra.component.html',
  styleUrls: ['./cambio-contra.component.scss'],
})
export class CambioContraComponent  implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.correo = ""
  }
  
  correoD = document.getElementById("correo") as HTMLInputElement;
  correo:string = this.correoD.value;

  cambioContra(correo: string): void{
    this.authService.cambioContra(this.correo);
  }
}
