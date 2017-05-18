import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JokesService {

  constructor(private http: Http) { }

  getRandom() {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map((res: Response) => res.json())
      // .map((res) => res.value.joke); 
  }

  getRandomPromise(): Promise<string> {
    return this.http.get('http://api.icndb.com/jokes/random')
      .toPromise()
      .then((res: Response) => res.json())
      .then((res) => res.value.joke);
  }
}
