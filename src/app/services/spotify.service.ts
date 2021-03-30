import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQAjo_geaEb7d8fxYzgbULZRzc9ACxs5AAhlRdkS5-SW1Ca_WV5NYS9RzOwZW3LD-l-J-UcIRlwr_gbhrmo"
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getArtist(term: string){

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQAjo_geaEb7d8fxYzgbULZRzc9ACxs5AAhlRdkS5-SW1Ca_WV5NYS9RzOwZW3LD-l-J-UcIRlwr_gbhrmo"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ term }&type=artist&limit=15`, { headers });
  
  }
}


