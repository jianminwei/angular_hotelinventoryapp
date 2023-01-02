import { Component, Inject, OnInit } from '@angular/core';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';

  constructor(@Inject(localStorageToken) private localStorage: Storage) {

  }

  ngOnInit(): void {

    //add an item to the localStorate.
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
}
