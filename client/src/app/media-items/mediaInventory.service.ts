import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


export class Media {
  constructor(public id: number, public name: string, public thumb: string) { }
}

const DUMMY_ITEMS = [new Media(0, 'Pika', 'hqdefault.jpg')];

@Injectable()
export class MediaInventoryService {

  private serviceUrl = 'http://localhost:5000/'
  
  constructor(private http: HttpClient) {}
  
  getMediaItems(): Promise<Media[]> {
    return this.http.get(this.serviceUrl+'getmediaitems')
               .toPromise()
               .then(response => response.json().data as Media[])
               .catch(this.handleError);
	}
	 
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}
