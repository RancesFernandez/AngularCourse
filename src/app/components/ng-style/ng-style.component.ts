import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
     Hola mundo... Esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="size = size + 5; size = size > 45 ? 45 : size">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="size = size - 5; size = size < 5 ? 5 : size">
      <i class="fa fa-minus"></i>
    </button>
    
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  size: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
