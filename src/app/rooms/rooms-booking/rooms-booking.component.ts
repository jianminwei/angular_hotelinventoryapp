import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})

export class RoomsBookingComponent implements OnInit {

  // id$ ! : Observable<string>;

  // id$ = this.router.params.pipe(map(params => params['roomNumber']));

  /**
   * paramMap() is prefered way. You can get multiple parameters from the route.
   */
  id$ = this.router.paramMap.pipe(map(params => params.get('roomNumber')));

  constructor(private router: ActivatedRoute) { }


  ngOnInit(): void {
    // this.router.params.subscribe((params) => {console.log(params['roomNumber'])});

    //  this.id$ = this.router.params.pipe(
    //     map(params => params['roomNumber'])
    //   );
  }

}
