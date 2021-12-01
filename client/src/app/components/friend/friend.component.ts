import { Component, OnInit } from '@angular/core';
import { Friend } from "../../../Interface/Friend";
import { FriendService } from "../../services/friend.service";


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  friends: Friend[] = [];
  constructor(private friendService: FriendService) {
  }

  ngOnInit(): void {
    this.friendService.getFriends().subscribe((friends) => (this.friends = friends));
  }
  updateFriendAsBest(friend: Friend) {
    friend.is_best_friend = !friend.is_best_friend;
    this.friendService.updateFriendAsBest(friend).subscribe();
  }

}
