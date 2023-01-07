import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: '**', component: PageNotfoundComponent}, //wild card routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
