import { Injectable, NgZone } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  
  public user$: Observable<User>;
  
  userData:any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore, 
    private router:Router,
    private ngz:NgZone
  ){
   this.afAuth.authState.subscribe((user)=>{
    if(user){
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user') || '{}');
    }else{
      localStorage.setItem('user', null || '{}');
      JSON.parse(localStorage.getItem('user' || '{}'));
    }
   });
  }

  login(email:any, password:any){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(email:any, password:any){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  updateData(){
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    ); 
  }

  resetPassword(email: any) {
    return this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user !== null && user.emailVerified !== false ? true : false;
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.emailVerified !== false ? true : false;
  }

  async logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  async sendVerificationEmail():Promise<void>{
    return this.afAuth.currentUser.then((user: any) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['/verify-email']);
      });
    });
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngz.run(() => {
          this.router.navigate(['admin']);
        });
        this.updateUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, { merge:true });
  }


}
