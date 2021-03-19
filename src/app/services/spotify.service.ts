import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQD0C78wTtGdBbxXRu4nvIQ3T6DLkGvh-CPoXDVb0IA6R0HQLWwKrum1yzpxGJmKpMYEp64DezVZBM2TO8k"
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe( data => {
      console.log(data);
    } );

  }
}
