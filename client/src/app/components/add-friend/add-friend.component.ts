import { Component, OnInit } from '@angular/core';
import { Language } from "../../../Interface/Language";
import { LanguageService } from "../../services/language.service";
import { FriendService } from "../../services/friend.service";
import { Friend as FriendModel } from "../../models/friend";

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  friendModel = new FriendModel('','','','','',false,'',0);
  languages: Language[] = [];
  message: any = [];
  constructor(private  languageService: LanguageService, private friendService: FriendService) {
  }

  ngOnInit(): void {
    this.languageService.getlanguage().subscribe((languages) => (this.languages = languages));
  }

  addFriend() {
    this.friendService.addNewFriend(this.friendModel).subscribe();
  }

  postFriend() {
    this.friendService.addNewFriend(this.friendModel).subscribe((message) => (this.message = message));
    console.log(this.message);
  }

}
