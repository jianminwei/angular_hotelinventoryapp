import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [];

  //Added HttpClient
  constructor(private http:HttpClient) { }

  getRooms() {
    //return this.roomList;
    return this.http.get<RoomList[]>('api/rooms');
  }

  addRoom() {
    const room:RoomList = 
    {
      roomNumber: '99',
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
