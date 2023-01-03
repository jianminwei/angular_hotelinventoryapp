import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

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
  selectedRoom!: RoomList;


  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {

    //normally you put data retrieving in the ngOnInit event.
    this.roomService.getRooms().subscribe(rooms => {this.roomList = rooms});
    //console.log(this.roomService.getRooms());

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room)
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

    //this.roomList = this.roomService.addRoom(room);

    this.roomService.addRoom(room).subscribe(rooms => {this.roomList = rooms})
  }

}
