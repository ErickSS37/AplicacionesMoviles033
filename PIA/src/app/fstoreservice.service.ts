import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Articulos } from './models/articulos.interface';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class FstoreserviceService {

  constructor(private fs:AngularFirestoreDocument) { } 

}
