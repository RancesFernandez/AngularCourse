import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;
  @ViewChild( IonList ) list: IonList

  constructor(public whishesService: WishesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() { }

  selectedList(list: List) {

    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);

    }

    console.log(list);

    // this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);

  }

  deleteList(list: List) {

    this.whishesService.deleteList(list);

  }

  async editList(list: List) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'List name'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel');
          this.list.closeSlidingItems();

        }
      },
      {
        text: 'Update',
        handler: (data) => {
          console.log(data);
          if (data.title.length === 0) {
            return;
          }

          list.title = data.title;

          this.whishesService.saveInStorage();
          this.list.closeSlidingItems();

        }
      }
      ]
    });

    alert.present();
  }

}

