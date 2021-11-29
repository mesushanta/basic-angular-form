import { Component, OnInit } from '@angular/core';
import { Language } from "../../../Model/Language";
import { LanguageService } from "../../services/language.service";

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  languages: Language[] = [];
  constructor(private  languageService: LanguageService) { }

  ngOnInit(): void {
    this.languages = this.languageService.getlanguage();
  }

}
