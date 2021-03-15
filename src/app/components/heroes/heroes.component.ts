import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService, 
                private router: Router ) {
    console.log("Constructor");


   }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
    
  }

  verHeroe(idx: number){
    this.router.navigate( ['/heroe', idx] );
    console.log(idx);
  }

}
