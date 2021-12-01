import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FriendComponent } from './components/friend/friend.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { SingleFriendComponent } from './components/single-friend/single-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    AddFriendComponent,
    SingleFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
