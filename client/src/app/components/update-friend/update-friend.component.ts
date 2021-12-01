import { Component, OnInit } from '@angular/core';
import { Language } from "../../../Interface/Language";
import { LanguageService } from "../../services/language.service";
import { FriendService } from "../../services/friend.service";
import { Friend as FriendModel} from "../../models/friend";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-friend',
  templateUrl: './update-friend.component.html',
  styleUrls: ['./update-friend.component.css']
})
export class UpdateFriendComponent implements OnInit {

  friendModel = new FriendModel('','','','','',false,'',18);
  languages: Language[] = [];
  message: any = [];
  public friend;
  public id;


  constructor(
    private  languageService: LanguageService, private friendService: FriendService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    this.languageService.getlanguage().subscribe((languages) => (this.languages = languages));
    this.friendService.getSingleFriend(this.id).subscribe((friend) => (this.friend = friend));

    console.log(this.id);
  }

  updateFriend() {
    console.log(this.id);
  }


}

