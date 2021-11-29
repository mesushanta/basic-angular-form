import { Injectable } from '@angular/core';
import { LANGUAGES } from "../mock-language";
import { Language} from "../../Model/Language";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getlanguage(): Language[] {
    return LANGUAGES;
  }
}
