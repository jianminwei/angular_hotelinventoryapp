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

  addRoom(room: RoomList) {


    //this.roomList.push(room);

    //in order to work with "changeDetection:ChangeDetectionStrategy.OnPush" detection
    //stratege on rooms-list component, this.roomList has to be a new array each time.
    //this.roomList = [...this.roomList, room];
    //return this.roomList;

    return this.http.post<RoomList[]>('api/rooms', room);
  }
}
