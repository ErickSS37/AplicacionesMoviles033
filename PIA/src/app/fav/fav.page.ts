import { Component, OnInit } from '@angular/core';
import { FstoreserviceService } from '../fstoreservice.service';
import { Articulos } from '../models/articulos.interface';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {

  constructor(private store:FstoreserviceService) { }
  articulos:any=[];
  //articulos:any = this.store.getArt(this.articulos);
  ngOnInit() {
    
  }



}
