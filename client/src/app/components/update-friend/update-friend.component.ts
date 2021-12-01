import { Component, OnInit } from '@angular/core';
import { Language } from "../../../Interface/Language";
import { LanguageService } from "../../services/language.service";
import { FriendService } from "../../services/friend.service";
import { Friend as FriendModel} from "../../models/friend";

@Component({
  selector: 'app-update-friend',
  templateUrl: './update-friend.component.html',
  styleUrls: ['./update-friend.component.css']
})
export class UpdateFriendComponent implements OnInit {

  friendModel = new FriendModel('','','','','',false,'',18);
  languages: Language[] = [];
  message: any = [];

  constructor(private  languageService: LanguageService, private friendService: FriendService) {
  }

  ngOnInit(): void {
    this.languageService.getlanguage().subscribe((languages) => (this.languages = languages));
    // this.friendService.getSingleFriend().subscribe((friend: FriendModel) => (this.friendModel = friend))
  }

  updateFriend() {
    console.log('Tests');
  }


}
