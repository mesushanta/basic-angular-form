import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from "../../../Interface/Friend";

@Component({
  selector: 'app-single-friend',
  templateUrl: './single-friend.component.html',
  styleUrls: ['./single-friend.component.css']
})
export class SingleFriendComponent implements OnInit {
  @Input() friend: Friend;
  @Output() updateBestFriend: EventEmitter<Friend> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateBestFriend(friend) {
    this.updateBestFriend.emit(friend);
  }

}
