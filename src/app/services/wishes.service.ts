import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() { 

    const list1 = new List( 'Recolectar piedras del infinito' );
    const list2 = new List( 'Heroes a desaparecer' );

    this.lists.push(list1, list2);

  
  }
}
