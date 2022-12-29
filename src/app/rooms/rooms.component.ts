import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel'
  numberOfRooms = 20;
  hideRooms = false;

  role = 'public';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];
  
  constructor() { }

  ngOnInit(): void {

    //Normally you do data retrieve in the ngOnInit event.

    this.roomList =  [
      {
        roomType: 'Deluxe Room',
        amenities: 'AC, TV, WiFi',
        price: 99.0,
        photos: "pic url",
        checkinTime: new Date('2022-12-05'),
        checkoutTime: new Date(),
        rating: 3.5
      },
      {
        roomType: 'Standard Room',
        amenities: 'AC, WiFi',
        price: 79.0,
        photos: "pic url",
        checkinTime: new Date('2022-12-05'),
        checkoutTime: new Date(),
        rating: 4.567
      },
      {
        roomType: 'Delux Room',
        amenities: 'AC, TV, WiFi',
        price: 109.0,
        photos: "pic url",
        checkinTime: new Date('2022-12-05'),
        checkoutTime: new Date(),
        rating: 4.5
      }
    ]

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
