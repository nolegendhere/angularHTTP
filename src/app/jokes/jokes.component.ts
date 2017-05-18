import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {


  joke: any;
  // joke: Promise<string>;
  constructor(private jokes: JokesService) { }

  ngOnInit() {
  	// this.joke = Observable
  	//   .fromEvent<MouseEvent>(document.getElementById('joke-btn'), 'click')
  	//   .throttleTime(1000)
  	//   .switchMap(
  	//     (e: MouseEvent) => this.jokes.getRandom()
  	//   );

  }

  getRandomJoke() {
    // this.jokes.getRandom()
    //   .subscribe((joke) => this.joke = joke);
    this.jokes.getRandom()
      .subscribe((joke) => this.joke = joke);
    // this.joke = this.jokes.getRandomPromise();
  }

}
