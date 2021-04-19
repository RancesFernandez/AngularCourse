import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor(private wishesService: WishesService,
    private route: ActivatedRoute) {

    const listId = this.route.snapshot.paramMap.get('listId');

    this.list = this.wishesService.getList(listId);



  }

  ngOnInit() { }

  addItem() {

    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);

    this.itemName = '';
    this.wishesService.saveInStorage();
  }

  changeCheck(item: ListItem) {

    const pending = this.list.items.filter(itemData => !itemData.finished).length;

    console.log({ pending });

    if (pending === 0) {
      this.list.finishedIn = new Date();
      this.list.finished = true;
    } else {
      this.list.finishedIn = null;
      this.list.finished = false;
    }

    this.wishesService.saveInStorage();

    console.log(this.wishesService.lists);
  }

  delete(i: number){

    this.list.items.splice( i, 1 );

    this.wishesService.saveInStorage();

  }

}
