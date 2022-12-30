import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
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

  constructor() { }

  getRooms() {
    return this.roomList;
  }

  addRoom() {
    const room:RoomList = 
    {
      roomType: 'Delux Room',
      amenities: 'AC, TV, WiFi',
      price: 119.0,
      photos: "pic url",
      checkinTime: new Date('2022-12-06'),
      checkoutTime: new Date(),
      rating: 4.8
    }

    //this.roomList.push(room);

    //in order to work with "changeDetection:ChangeDetectionStrategy.OnPush" detection
    //stratege on rooms-list component, this.roomList has to be a new array each time.
    this.roomList = [...this.roomList, room];

    return this.roomList;
  }
}
