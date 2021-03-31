import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQCuDhU6EeuMH_57cEUmO05y9RL5rpF7KnIsVyW8DOA37h7N7ppuqH-bU0ZgcBf9lUpUay5rLNtYtI7givg"
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
          .pipe(map(data => data['albums'].items));

    // const headers = new HttpHeaders({
    //   'Authorization': "Bearer BQAWgr8uAjm1oo-5JiRIj-9-onDKcE5HTLIDh0bnGAd4u5LgFz2bJ2ZcG37SQzhslU5sgC1ho5KsnQtxilE"
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //   .pipe(map(data => data['albums'].items));
  }

  getArtists(term: string) {

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
    .pipe(map(data => data['artists'].items));

    // const headers = new HttpHeaders({
    //   'Authorization': "Bearer BQAWgr8uAjm1oo-5JiRIj-9-onDKcE5HTLIDh0bnGAd4u5LgFz2bJ2ZcG37SQzhslU5sgC1ho5KsnQtxilE"
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers })
    //   .pipe(map(data => data['artists'].items));

  }

  getArtist(id: string) {

    return this.getQuery(`artists/${ id }`)
    // .pipe(map(data => data['artists'].items));
}

}