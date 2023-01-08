import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/add', component: RoomsAddComponent},
  {path: 'rooms/:roomNumber', component: RoomsBookingComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: '**', component: PageNotfoundComponent}, //wild card routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
