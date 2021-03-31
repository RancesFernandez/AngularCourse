import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;


  constructor(private spotify: SpotifyService) {


  }


  search(term: string) {
    console.log(term);
    this.loading = true;
    this.spotify.getArtists(term)
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;

      });


  }

  ngOnInit(): void {
  }

}
