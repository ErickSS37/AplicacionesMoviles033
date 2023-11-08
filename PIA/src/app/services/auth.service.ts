import { Injectable } from '@angular/core';
import { sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, Auth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth: Auth) { }

  login(correo: string,contraseña: string ){
    return signInWithEmailAndPassword(this.auth, correo, contraseña);
  }

  registro(correo:string, contraseña:string) {
    return createUserWithEmailAndPassword(this.auth, correo, contraseña);
  }

  cambioContra(correo:string){
    return sendPasswordResetEmail(this.auth, correo);
  }
}
