import { Component, Inject, OnInit } from '@angular/core';
import { InitService } from './init.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';

  constructor(@Inject(localStorageToken) private localStorage: Storage,
              private initService: InitService) {
      console.log(initService.config);

  }

  ngOnInit(): void {

    //add an item to the localStorate.
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
}
