import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from "../../mock-language";
import { Language } from "../../../Model/Language";

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  languages: Language[] = LANGUAGES
  constructor() { }

  ngOnInit(): void {
  }

}
