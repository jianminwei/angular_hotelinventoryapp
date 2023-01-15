import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0
  }

  sucessMessage: string = '';

  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {
  }

  AddRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.room)
      .subscribe(

        (data) => {
          this.sucessMessage = 'Room Added Successfully';
          roomsForm.reset();
        }
      )
  }
}
