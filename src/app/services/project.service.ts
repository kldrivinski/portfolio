import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  private readonly apiKey = environment.FLICKR_API_KEY;

  constructor(private http: HttpClient) { }
  imagesUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719438120028&format=json&JSONP_CALLBACK=?&nojsoncallback=1`;


  getPhotos() {
    //return this.http.jsonp(this.imagesUrl, 'JSONP_CALLBACK');
    return this.http.get(this.imagesUrl);
  }

  getBeyond() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157712745023826&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getJt() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551054&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }


  getMic() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551059&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getPeople() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551069&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getBrainworms() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551074&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getMackinac() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551079&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getPool() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551089&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getEve() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551094&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getEloise() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551099&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }

  getRoad() {
    return this.http.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=72157719515551104&format=json&JSONP_CALLBACK=?&nojsoncallback=1`);
  }
}
