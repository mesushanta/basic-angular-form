import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FriendComponent} from "./components/friend/friend.component";
import {UpdateFriendComponent} from "./components/update-friend/update-friend.component";
import {SingleFriendComponent} from "./components/single-friend/single-friend.component";

const routes: Routes = [
  {
    path: 'friends',
    component: FriendComponent
  },
   {
    path: 'friend/:id',
    component: SingleFriendComponent
  },
  {
    path: 'friend/edit/:id',
    component: UpdateFriendComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
