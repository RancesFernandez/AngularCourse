import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {

    this.chargeStorage();

    // const list1 = new List( 'Just do it' );
    // const list2 = new List( 'Go to the market' );

    // this.lists.push(list1, list2);


  }

  createList(title: string) {

    const newList = new List(title);
    this.lists.push(newList);
    this.saveInStorage();

    return newList.id;

  }

  deleteList(list: List) {

    this.lists = this.lists.filter(dataList => dataList.id != list.id);

    this.saveInStorage();

  }

  getList(id: number | string) {

    id = Number(id);

    return this.lists.find(dataList => dataList.id === id);


  }

  saveInStorage() {

    localStorage.setItem('data', JSON.stringify(this.lists));
  }


  chargeStorage() {

    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    } else {
      this.lists = [];
    }

  }
}
