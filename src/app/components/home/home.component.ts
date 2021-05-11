import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
     <app-ng-style></app-ng-style>
     <br>

   <app-css></app-css>
   <br>

  <p>Hola mundo desde app.component</p>

   <app-classes></app-classes>
   <br>

   <p [appResaltado]="'blue'">Hola mundo</p>


  <br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("Constructor");
    
   }

  ngOnInit() {
    console.log("ngOnInit");

  }

  ngOnChanges() {
    console.log("ngOnChanges");

  }
  ngDoCheck() {
    console.log("ngDoCheck");

  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");

  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");

  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");

  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");

  }
  ngOnDestroy() {
    console.log("ngOnDestroy");

  }

}
