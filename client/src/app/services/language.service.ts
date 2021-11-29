import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { LANGUAGES } from "../mock-language";
import { Language} from "../../Model/Language";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getlanguage(): Observable<Language[]> {
    const languages = of(LANGUAGES)
    return languages;
  }
}
