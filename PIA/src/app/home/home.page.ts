import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  ngOnInit(){
    
  }

  constructor(private authSvc:AuthService, private router:Router){}

 

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
        tipo:"Capacitor",
        nombre:"CE-220/63V",
        precio:"$10.00"
    }
  ];
  
}
