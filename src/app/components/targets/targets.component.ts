import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  viewArtist( item: any ) {

    let artistId;

    if(item.type === 'artist'){
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistId ]);
    
  }

  ngOnInit(): void {
  }

}
