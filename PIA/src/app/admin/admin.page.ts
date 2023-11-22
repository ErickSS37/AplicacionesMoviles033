import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FstoreserviceService } from '../fstoreservice.service';
import { Articulos } from '../models/articulos.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit{
  userData:any;

  constructor(private authSvc:AuthService, private router:Router, private store:FstoreserviceService) { 
  }

  ngOnInit() {
      for (let i = 1; i < 11; i++){
        this.articulos.push(this.articulos[i]);
      }
  }

  logout(){
      this.authSvc.logout();
      this.redirectUserLogin();
  }

  redirectUserLogin(): void {
    this.router.navigate(['/login']);
  }

  insertarArticulo(nombre, precio, tipo){
    const art:Articulos = {
      nombre: nombre.value,
      precio: precio.value,
      tipo: tipo.value
    }
    this.store.addArt(art);
  }

  articulos = [
    {
      tipo:"Circuito Logico",
      nombre:"UA78L08ACLP",
      precio:"$14.00"
    },
    {
      tipo:"Circuito Logico",
      nombre:"MC34063AP1",
      precio:"$27.00"
    },
    {
      tipo:"Circuito Logico",
      nombre:"SN74LS00N",
      precio:"$14.00"
    },
    {
      tipo:"Circuito Logico",
      nombre:"SN74LS02",
      precio:"$13.00"
    },
    {
      tipo:"Circuito Logico",
      nombre:"HD74LS30N",
      precio:"$12.00"
    },
    {
      tipo:"Capacitor",
      nombre:"CE-220/63V",
      precio:"$10.00"
    },
    {
      tipo:"Capacitor",
      nombre:"E1-63R",
      precio:"$3.00"
    },  
    {
        tipo:"Capacitor",
        nombre:"2.2UF63V",
        precio:"$3.00"
    },
    {
      tipo:"Capacitor",
      nombre:"CE-330/16V-TEAPO",
      precio:"$7.00"
    },
    {
      tipo:"Capacitor",
      nombre:"CE-1000/25V-TEAPO",
      precio:"$7.00"
    }
  ];
  
}
